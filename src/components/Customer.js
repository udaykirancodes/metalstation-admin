import React from 'react'
import './customer.css'

const Customer = () => {
    return (
        <>
            <div className="customer d-flex" style={{ marginBottom: '20px' }}>
                <div className="customer_head head">
                    <h4>Customers</h4>
                </div>
                <div className="customer_head col-md-2">
                    <input type="text" className="form-control" id="price" placeholder='Type email or name' />
                </div>
            </div>
            <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                <div className="customer_info">
                    <table>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th>Total Amount</th>
                            <th>Number of Option</th>
                            <th>Phone</th>
                            <th>Payment Status</th>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Customer