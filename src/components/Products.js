import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'

const Products = () => {
    return (
        <>
            <div className="product">
                <Link to="/newProduct">
                    <button type="button" className="btn btn-primary newBtn">Add New Product</button>
                </Link>
                <div className="product_head">
                    <h4 style={{ marginLeft: '20px' }}>All Product</h4>
                </div>
                <hr />
                <div className="product_info">
                    <table>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Info</th>
                            <th>Published</th>
                            <th>Quantity</th>
                            <th>Upadte Product</th>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td><i class="fa-solid fa-trash mx-2" role='button'></i> <i class="fa-solid fa-file-pen mx-2" role='button'></i> </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Products