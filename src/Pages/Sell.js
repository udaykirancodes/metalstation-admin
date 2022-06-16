import React from 'react'
import './sell.css'

const Sell = () => {
    return (
        <>
            <div className="sell_table mx-auto">
                <div className="col-md-6 d-flex">
                    <div className="sell_head" style={{ marginRight: '44%', marginLeft: '20px' }}>
                        <h4>sell</h4>
                    </div>
                    <div className="sell_head_search col-md-2">
                        <input type="text" className="form-control" id="price" placeholder='Search By sell Name' />
                    </div>
                </div>
                <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                    <div className="sell_info">
                        <table>
                            <tr>
                                <th>#</th>
                                <th>Type</th>
                                <th>Email</th>
                                <th>Full Name</th>
                                <th>Phone</th>
                                <th>Detail</th>
                            </tr>
                            <tr>
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
            </div>
        </>
    )
}

export default Sell