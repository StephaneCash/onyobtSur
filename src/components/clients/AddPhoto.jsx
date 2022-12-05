import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Client.css"
import Leftbar from '../Leftbar';
import Navbar from '../Navbar';
import { Person } from '@material-ui/icons';
import ElementsBase from "../../base/ElementsBase"
import { NavLink, useNavigate, useLocation } from 'react-router-dom';


function AddPhoto() {

    const url = ElementsBase && ElementsBase.url;

    const [clicBtn, setClicBtn] = useState(false);
    const [picture, setPicture] = useState(null);
    const [file, setFile] = useState(null);

    const navigate = useNavigate();

    const location = useLocation();
    const { state } = location;

    const changeValue = (e) => {
        setPicture(e.target.files[0])
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const submitData = () => {
        setClicBtn(true);

        let formData = new FormData();
        formData.append('file', picture);

        axios.put(url + "clients/edit-photo/" + state.val.id, formData)
            .then(resp => {
                console.log(resp.data)
                navigate('/clients');
                setClicBtn(false);
            })
            .catch(err => {
                console.log(err)
                setClicBtn(false);
            })
    }

    return (
        <div>
            <Navbar />
            <div className='d-flex main'>
                <div className='col-sm-2'>
                    <Leftbar />
                </div>
                <div className='col-sm-10'>
                    <div className='getAllClients' style={{ paddingTop: "1rem", paddingRight: "1rem" }}>
                        <h4 style={{ color: "#fff" }}>
                            Modifier la photo de {state && state.val && state.val.nom + " " + state.val.prenom} <Person />
                        </h4>

                        <div className='addClient'>
                            <div className='row'>
                                <div className='col-sm-5'>
                                    <input type="file" id="nom" onChange={changeValue}
                                        className='form-control' placeholder='Photo' />

                                    <button className='btn btnEditer' onClick={submitData}>
                                        {clicBtn ? <i className='fa fa-spinner fa-pulse'></i> : "Modifier"}
                                    </button>
                                </div>

                                <div className='col-sm-7 text-center'>
                                    Photo upload:
                                    <br />
                                    <br />
                                    {file && <img src={file} alt="Pic-client" width="300" height="300" style={{ borderRadius: '50%' }} />}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPhoto