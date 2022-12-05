import React, { useEffect, useState } from 'react'
import { Modal } from "react-bootstrap";
import "./Client.css";
import ElementsBase from "../../base/ElementsBase"
import axios from 'axios';


function Traitement(props) {

    const show = props.show;
    const close = props.close;
    const client = props.client;

    const [hopitals, setHopitals] = useState([])

    const url = ElementsBase && ElementsBase.url;

    const getAllHopitals = () => {
        axios.get(url + "hopitals")
            .then(res => {
                setHopitals(res.data);
            })
            .catch(err => {
                console.log(err.response)
            })
    };

    useEffect(() => {
        getAllHopitals();
    }, []);

    return (
        <Modal show={show} id='modal'>
            <Modal.Header style={{ color: '#333' }}>
                Traitement du client {client && client.nom + ' ' + client.prenom}
            </Modal.Header>
            <Modal.Body>
                <div className="col-sm-12">
                    <div>
                        <input type="text" className='form-control' placeholder='Nom de la maladie' />
                        <br />

                        <select name="" id="" className='form-control'>
                            <option value="">--Sélectionner un hôpital--</option>
                            {hopitals && hopitals.data && hopitals.data.map((val, i) => {
                                return <option value={val.id}>{val.nom}</option>
                            })}
                        </select><br />
                        <select name="" id="" className='form-control'>
                            <option value="">--Sélectionner un médecin--</option>
                        </select><br />
                        <input type="text" className='form-control' placeholder='Nom de la maladie' />
                    </div>
                    <button className='mt-3 btn'>Sauvegarder</button>
                </div>
            </Modal.Body>
            <Modal.Footer style={{ paddingRight: "30px" }}>
                <button className='btn' onClick={close}>Fermer <i className="fa fa-close"></i></button>
            </Modal.Footer>
        </Modal>
    )
}

export default Traitement