import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GetAllEleves from '../components/eleves/GetAllEleves'
import Leftbar from '../components/Leftbar'
import Navbar from '../components/Navbar'
import "../css/Eleves.css"

function Trans() {
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
                        <div className='d-flex'>
                            <div className='col-sm-5'>
                                <h4 style={{ color: "#fff" }}>
                                    Transactions (0)
                                </h4>

                            </div>
                            <div className="col-sm-6 d-flex" style={{ float: "right" }}>
                                <input type="search" className='form-control' placeholder='Chercher une transaction...' />
                                <button className="btn" style={{ backgroundColor: "#172242", color: "#fff", border: "1px solid #fff" }}>Rechercher</button>
                            </div>
                        </div>
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Référence</th>
                                    <th>Transactions</th>
                                    <th>Montant</th>
                                    <th>Status</th>
                                    <th>Date Due</th>
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

export default Trans