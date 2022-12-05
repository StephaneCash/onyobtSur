import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Traitement from './Traitement';

function GetAllClients(props) {

    let clients = props.clients;

    const [showModalTraitement, setShowModalTraitement] = useState(false);
    const [client, setClient] = useState(null);

    const showModalHandle = (val) => {
        setShowModalTraitement(true);
        setClient(val);
    }

    const closeModalHandle = ()=>{
        setShowModalTraitement(false);
    }

    return (
        <>
            {clients && clients.taille > 0 ? (
                clients.data.map((client, i) => {
                    return (
                        <tr key={i} >
                            <td>{i + 1}</td>
                            <td>{client.nom}</td>
                            <td>{client.postnom}</td>
                            <td>{client.prenom}</td>
                            <td>{client.age} ans</td>
                            <td>{client.sexe}</td>
                            <td>{client.poids} Kg</td>
                            <td>{client.isAbonne === 0 ? "Pas encore abonné" : "Abonné"}</td>

                            <td>
                                <img src={`./${client.photo}`} width="70" height="70" style={{ borderRadius: "50%" }} alt={"Photo " + client.nom} />
                            </td>

                            <td style={{ width: "370px" }}>
                                <button>Editer</button>
                                <button>Détail</button>
                                <Link to={{ pathname: "edit-photo" }} state={{ val: client }}>
                                    <button>Ajouter une photo</button>
                                </Link>
                                <button>Supprimer</button>
                                <br />
                                <button onClick={() => showModalHandle(client)}>Traitement</button>
                            </td>
                        </tr>
                    )
                })

            ) :
                <tr>
                    <td colSpan='10px' className='text-center' style={{ color: "#fff" }}>
                        <i className='fa fa-spinner fa-pulse fa-2x'></i> Chargement...
                    </td>
                </tr>
            }
            <Traitement show={showModalTraitement} close={closeModalHandle} client={client} />
        </>
    )
}

export default GetAllClients