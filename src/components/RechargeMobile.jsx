import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GetAllEleves from '../components/eleves/GetAllEleves'
import Leftbar from '../components/Leftbar'
import Navbar from '../components/Navbar'
import "../css/Eleves.css"

function RechargeMobile() {
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
                        <h4 style={{ color: "#fff" }}>
                            Recharge Mobile - Congo-Kinshasa
                        </h4>

                        <div className="grille mt-5">
                            <div className='card'>
                                <div className='card-header'>AIRTEL</div>
                                <div className='card-body'>
                                    <img src="./airtel.png" alt='Airtel' />
                                </div>
                            </div>

                            <div className='card'>
                                <div className='card-header'>AFRICELL</div>
                                <div className='card-body'>
                                    <img src="./africell.jpeg" alt="Africell" />
                                </div>
                            </div>

                            <div className='card'>
                                <div className='card-header'>MPSA</div>
                                <div className='card-body'>
                                    <img src="./mpsa.jpeg" alt="mpsa" />
                                </div>
                            </div>
                            <div className='card'>
                                <div className='card-header'>ORANGE</div>
                                <div className='card-body'>
                                    <img src="./orange.png" alt="Orange" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RechargeMobile