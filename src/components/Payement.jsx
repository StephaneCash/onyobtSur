import ButtonCheckOut from './paypal/ButtonCheckOut';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GetAllEleves from '../components/eleves/GetAllEleves'
import Leftbar from '../components/Leftbar'
import Navbar from '../components/Navbar'
import "../css/Eleves.css"

function Payement() {
    const location = useLocation();
    const { state } = "100";
    return (
        <div className='data'>
            <div>
                <Navbar />
                <div className='d-flex main'>
                    <div className='col-sm-2'>
                        <Leftbar />
                    </div>
                    <div className='col-sm-10'>
                        <div className='getAllEleves' style={{ paddingTop: "1rem", paddingRight: "1rem" }}>
                            <h4 style={{ color: "#fff" }}>
                                PAYPAL
                            </h4>
                            <ButtonCheckOut product={state} style={{ margin: '0px auto', width: '50%' }} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payement