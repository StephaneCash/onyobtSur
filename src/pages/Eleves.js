import { History } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GetAllEleves from '../components/eleves/GetAllEleves'
import Leftbar from '../components/Leftbar'
import Navbar from '../components/Navbar'
import "../css/Eleves.css"

function Eleves() {
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
                        <h4 style={{ color: "#fff" }}>Historique Balance (0) <History /></h4>
                        <table className='table'>
                            <tr style={{ backgroundColor: "#172242" }} className="thead">
                                <th style={{width:'200px'}}>
                                    Balance disponible <br />
                                    $0.00
                                </th>
                                <th style={{width:'200px'}}>
                                    Affiliation <br />
                                    $0.00
                                </th>
                                <th style={{width:'200px'}}>
                                    Settlement <br />
                                    $0.00
                                </th>
                            </tr>
                        </table>
                        
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Type</th>
                                    <th>Description</th>
                                    <th>Montant</th>
                                    <th>Status</th>
                                    <th>Date</th>
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

export default Eleves