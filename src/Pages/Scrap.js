import React from 'react'
import './scrap.css'

const Scrap = () => {
  return (
    <>
        <div className="scrap_table mx-auto">
                <div className="col-md-6 d-flex">
                    <div className="scrap_head" style={{ marginRight: '44%', marginLeft: '20px' }}>
                        <h4>scrap</h4>
                    </div>
                    <div className="scrap_head_search col-md-2">
                        <input type="text" className="form-control" id="price" placeholder='Search By scrap Name' />
                    </div>
                </div>
                <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                    <div className="scrap_info">
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

export default Scrap