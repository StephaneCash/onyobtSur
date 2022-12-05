import React from 'react'
import ApercuContent from '../components/ApercuContent';
import Leftbar from '../components/Leftbar';
import Navbar from '../components/Navbar';
import "../css/Dashboard.css";
import Graphiques from '../components/Graphiques';
import Transactions from '../components/Transactions';

function Dashborad() {
    return (
        <>
            <Navbar />
            <div className='d-flex main'>
                <div className='col-sm-2'>
                    <Leftbar />
                </div>
                <div className='col-sm-10'>
                    <ApercuContent />
                    <Graphiques />
                    <Transactions />
                </div>
            </div>
        </>
    )
}

export default Dashborad