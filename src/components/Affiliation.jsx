import { Group, History } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GetAllEleves from '../components/eleves/GetAllEleves'
import Leftbar from '../components/Leftbar'
import Navbar from '../components/Navbar'
import "../css/Eleves.css"

function Affiliation() {
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
                        <h4 style={{ color: "#fff" }}>Affiliation <Group /></h4>
                        <div className='card'>
                            <div className="card-body">
                                <div className='d-flex'>
                                    <div className="col-sm-9">
                                        <h5 className='mb-3'>Invitez vos amis et Gagnez de l'argent.</h5>
                                        <span>Invitez vos amis et gagnez $0.25 par personne et $0.50 pour chaque carte créée par votre ami.
                                            <br />
                                            Votre ami gagnera aussi $0.50 s'il utilise votre lien pour s'inscrire.</span>
                                    </div>
                                    <div className="col-sm-3">
                                        <button className='btnbtn'>Copier le lien</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table className='table'>
                            <tr style={{ backgroundColor: "#172242" }} className="thead">
                                <th style={{ width: '200px' }}>
                                    Balance disponible <br />
                                    $0.00
                                </th>
                                <th style={{ width: '200px' }}>
                                    Affiliation <br />
                                    $0.00
                                </th>
                                <th style={{ width: '200px' }}>
                                    Settlement <br />
                                    $0.00
                                </th>
                            </tr>
                        </table>

                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Utilisateur</th>
                                    <th>Bonus gagné</th>
                                    <th>Statut</th>
                                    <th>Inscription</th>
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

export default Affiliation