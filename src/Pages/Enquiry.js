import React from 'react'
import './enquiry.css'
const Enquiry = () => {
  return (
    <>
        <div className="enquiry_table mx-auto">
                <div className="col-md-6 d-flex">
                    <div className="enquiry_head" style={{ marginRight: '44%', marginLeft: '20px' }}>
                        <h4>Enquiry</h4>
                    </div>
                    <div className="enquiry_head_search col-md-2">
                        <input type="text" className="form-control" id="price" placeholder='Search By enquiry' />
                    </div>
                </div>
                <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                    <div className="enquiry_info">
                        <table>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Type</th>
                                <th>Quantity</th>
                                <th>Customer's price</th>
                                <th>Status</th>
                            </tr>
                            <tr>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td colSpan={2}>Yes/no</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Enquiry