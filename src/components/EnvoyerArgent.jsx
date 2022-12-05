import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import GetAllEleves from '../components/eleves/GetAllEleves'
import Leftbar from '../components/Leftbar'
import Navbar from '../components/Navbar'
import "../css/Eleves.css"

function EnvoyerArgent() {
    const [etudiants, setEtudaints] = useState([]);
    const getAllUsers = () => {
        axios.get('http://localhost:5000/api/etudiants')
            .then(res => {
                console.log(res.data)
                setEtudaints(res.data);
            })
            .catch(err => {
                console.log(err.response)
            })
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <div>
            <Navbar />
            <div className='d-flex main'>
                <div className='col-sm-2'>
                    <Leftbar />
                </div>
                <div className='col-sm-10'>
                    <div className='getAllEleves' style={{ paddingTop: "1rem", paddingRight: "1rem" }}>
                        <h4 style={{ color: "#fff" }}>Choisir le mode de paiement</h4>
                        <div className="grille mt-5">
                            <div className='card'>
                                <div className='card-header'>PAYPAL</div>
                                <NavLink to="/payement">
                                    <div className='card-body'>
                                        <img src="./paypal.png" alt='Paypal' />
                                    </div>
                                </NavLink>
                            </div>

                            <div className='card'>
                                <div className='card-header'>CRYPTOS</div>
                                <div className='card-body'>
                                    <img src="./crypto.jpeg" alt="crypto" />
                                </div>
                            </div>

                            <div className='card'>
                                <div className='card-header'>MPSA</div>
                                <div className='card-body'>
                                    <img src="./mpsa.jpeg" alt="mpsa" />
                                </div>
                            </div>
                            <div className='card'>
                                <div className='card-header'>VISA</div>
                                <div className='card-body'>
                                    <img src="./visa.png" alt="co" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnvoyerArgent