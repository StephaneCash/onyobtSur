import { People } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GetAllClients from '../components/clients/GetAllClients'
import Leftbar from '../components/Leftbar'
import Navbar from '../components/Navbar';
import "../components/clients/Client.css";
import { Link } from 'react-router-dom';

function Client() {
    const [clients, setClients] = useState([]);

    const getAllClients = () => {
        axios.get('http://localhost:5000/api/clients')
            .then(res => {
                setClients(res.data);
            })
            .catch(err => {
                console.log(err.response)
            })
    };

    useEffect(() => {
        getAllClients();
    }, []);

    return (
        <div>
            <Navbar />
            <div className='d-flex main'>
                <div className='col-sm-2'>
                    <Leftbar />
                </div>
                <div className='col-sm-10'>
                    <div className='getAllClients' style={{ paddingTop: "1rem", paddingRight: "1rem" }}>
                        <h4 style={{ color: "#fff" }}>Clients Nombre ({clients ? clients.taille : <i className='fa fa-spinner fa-pulse fa-2x text-danger'></i>}) <People /></h4>
                        <div className='barComponentAddBtnClientAndBarRecherche'>
                            <div className='d-flex compomentContent'>
                                <div className='col-sm-4 col6InputSearch'>
                                    <div className="input-group">
                                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                        <button type="button" className="btn btnSerach"> <i className='fa fa-search'></i> </button>
                                    </div>
                                </div>
                                <div className='col-sm-8'>
                                    <Link to='add'>
                                        <button className='btn btnAddClient'>Ajouter un nouveau client</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Nom</th>
                                    <th>Postnom</th>
                                    <th>Prénom</th>
                                    <th>Age</th>
                                    <th>Sexe</th>
                                    <th>Poids</th>
                                    <th>Statut</th>
                                    <th>Photo</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <GetAllClients clients={clients} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Client