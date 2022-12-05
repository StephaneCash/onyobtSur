import React from 'react'

function Transactions() {
    return (
        <div className='table'>
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
                    <tr>
                        <td colSpan='6px' className='text-center' style={{ color: "#fff" }}>
                            <i className='fa fa-spinner fa-pulse fa-2x'></i> Chargement...
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions