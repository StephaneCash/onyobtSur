import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Affiliation from '../components/Affiliation';
import Settlement from '../components/Settlement';
import EnvoyerArgent from '../components/EnvoyerArgent';
import Trans from '../components/Trans';
import Dashborad from '../pages/Dashborad';
import Eleves from '../pages/Eleves';
import Inscription from '../pages/Inscription';
import Login from '../pages/Login';
import CarteVirtuelle from '../components/CarteVirtuelle';
import RechargeMobile from '../components/RechargeMobile';
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import Payement from '../components/Payement';
import Client from '../pages/Client';
import AddClient from '../components/clients/AddClient';
import AddPhoto from '../components/clients/AddPhoto';


function RoutesComponents() {
    return (
        <BrowserRouter>
            <PayPalScriptProvider options={{ "client-id": "AUGBEurHYAYgL-fNwZX8bA60QtYNAPPpoRw0KDmNFfpc6rEEsVL-ERZqkupmDF7fRonMmTYY8HWRidyp" }}>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/inscription' element={<Inscription />} />
                    <Route path="/dashboard" element={<Dashborad />} />
                    <Route path="/balance" element={<Eleves />} />
                    <Route path="/affiliation" element={<Affiliation />} />
                    <Route path="/settlemnt" element={<Settlement />} />
                    <Route path="/transactions" element={<Trans />} />
                    <Route path="/modepayement" element={<EnvoyerArgent />} />
                    <Route path="/cartevirtuelle" element={<CarteVirtuelle />} />
                    <Route path="/rechargeMobile" element={<RechargeMobile />} />
                    <Route path="/payement" element={<Payement />} />
                    <Route path="/clients" element={<Client />} />
                    <Route path="/clients/add" element={<AddClient />} />
                    <Route path="/clients/edit-photo" element={<AddPhoto />} />
                </Routes>
            </PayPalScriptProvider>
        </BrowserRouter>
    )
}

export default RoutesComponents