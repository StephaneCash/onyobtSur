import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GetAllEleves from '../components/eleves/GetAllEleves'
import Leftbar from '../components/Leftbar'
import Navbar from '../components/Navbar'
import "../css/Eleves.css"

function CarteVirtuelle() {
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
                            Cartes Virtuelles
                        </h4>
                        <hr style={{ color: "silver" }} />
                        <h6 style={{ color: "#fff" }}>
                            Actives (0)
                        </h6>
                        <div className="d-flex">
                            <div className="col-sm-2">
                                <h6 style={{ color: "#fff" }}>
                                    Suspendues (0)
                                </h6>
                            </div>
                            <div className='col-sm-10'>
                                <button className='btn' style={{ float: "right", border: "1px solid #fff", color: "#fff" }}>Créer une carte</button>
                            </div>
                        </div>

                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Nom de la carte</th>
                                    <th>Indice</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                    <th>Expiration</th>
                                </tr>
                            </thead>
                            <tbody>
                                <GetAllEleves etudiants={etudiants} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarteVirtuelle