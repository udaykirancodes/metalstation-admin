import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './product.css'

const Products = (props) => {
    const { showAlert } = props
    const ref = useRef(null)
    const refClose = useRef(null)

    const handleDelete = () => {
        showAlert("your product has been Deleted", "success")

    }
    const handleEdit = () => {
        ref.current.click();
    }
    const handleClick = (e) => {
        refClose.current.click()
        showAlert("your product has been updated", "success")
        e.preventDefault();
    }
    return (

        <>
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form class="row g-3">
                                <div class="col-md-6">
                                    <label for="name" class="form-label">Name of the Product</label>
                                    <input type="text" class="form-control" id="name" />
                                </div>
                                {/* <div class="col-md-4">
                                    <label for="category" class="form-label">Category</label>
                                    <Select isMulti={true}
                                        value={selectedOption}
                                        onChange={handleChange}
                                        options={options} id="category" class="form-select">
                                    </Select>
                                </div> */}
                                <div class="col-md-6">
                                    <label for="subCategory" class="form-label">SubCategory</label>
                                    <select id="subCategory" class="form-select">
                                        <option value=" ">Choose...</option>
                                        <option value="car">Car</option>
                                        <option value="bike">Bike</option>
                                        <option value="jsv">JSV</option>
                                    </select>

                                </div>
                                <div class="col-md-6">
                                    <label for="modelName" class="form-label">Model Name</label>
                                    <input type="text" class="form-control" id="modelName" />
                                </div>
                                <div class="col-md-4">
                                    <label for="brand" class="form-label">Brand</label>
                                    <select id="brand" class="form-select">
                                        <option selected>Choose...</option>
                                        <option>Suzuki</option>
                                        <option>Hundai</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <label for="price" class="form-label">Price</label>
                                    <input type="text" class="form-control" id="price" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Update Product</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal for deletion--> */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Removing Product</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Product will move to TRASH PRODUCT...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={handleDelete} data-bs-dismiss="modal">Remove Product</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product">

                <Link to="/newProduct">
                    <button type="button" className="btn btn-primary newBtn">Add New Product</button>
                </Link>
                <div className="product_head">
                    <h4 style={{ marginLeft: '20px' }}>All Product</h4>
                    <div className="product_search">
                        <input type="text" className="form-control" id="price" placeholder='Search By Name' />
                    </div>
                </div>
                <hr />
                <div className="product_info">
                    <table>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Sub Category</th>
                            <th>Modal Name</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Update Product</th>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td><i class="fa-solid fa-square-minus mx-2" role='button' data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i><i class="fa-solid fa-file-pen mx-2" role='button' onClick={handleEdit}></i> </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Products