import React from 'react'
import './order.css'

const Order = () => {
    return (
        <>
            <div className="order d-flex" style={{  marginBottom:'20px'}}>
                <div className="order_head head" style={{marginRight:'44%', marginLeft:'20px'}}>
                    <h4>Order</h4>
                </div>
                <div className="order_head col-md-2">
                    <select id="brand" className="form-select">
                        <option selected>Filter By Payment Status</option>
                        <option>Paid</option>
                        <option>Unpaid</option>
                    </select>
                </div>
                <div className="order_head col-md-2">
                    <select id="brand" className="form-select">
                        <option selected>Filter By Delivery Status</option>
                        <option>Placed</option>
                        <option>Cofirmed</option>
                        <option>Processed</option>
                        <option>Shipped</option>
                    </select>
                </div>
                <div className="order_head col-md-2">
                    <input type="text" className="form-control" id="price" placeholder='Type Order Code' />
                </div>
            </div>
            <div style={{marginLeft:'20px', marginRight:'20px'}}>
                <div className="order_info">
                    <table>
                        <tr>
                            <th>#</th>
                            <th>Order Code</th>
                            <th>Num of product</th>
                            <th>Customer</th>
                            <th>Amount</th>
                            <th>Delivery Status</th>
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

export default Order
