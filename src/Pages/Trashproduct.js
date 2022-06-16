import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'

const Trashproduct = (props) => {
    const { showAlert } = props
    const ref = useRef(null)
    const refClose = useRef(null)
    const options = [
        { value: 'stell', label: 'Stell' },
        { value: 'aluminum', label: 'Aluminum' },
        { value: 'copper', label: 'Copper' },
    ];

    const [state, setState] = useState('')

    const handleChange = selectedOption => {
        setState({ selectedOption });
    };
    const { selectedOption } = state;
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
                            <h5 className="modal-title" id="exampleModalLabel">Restore Product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form class="row g-3">
                                <div class="col-md-4">
                                    <label for="name" class="form-label">Product Name</label>
                                    <input type="text" class="form-control" id="name" />
                                </div>
                                <div class="col-md-4">
                                    <label for="category" class="form-label">Category</label>
                                    <Select isMulti={true}
                                        value={selectedOption}
                                        onChange={handleChange}
                                        options={options} id="category" class="form-select">
                                    </Select>
                                </div>
                                <div class="col-md-4">
                                    <label for="subCategory" class="form-label">SubCategory</label>
                                    <select id="subCategory" class="form-select">
                                        <option value=" ">Choose...</option>
                                        <option value="car">Car</option>
                                        <option value="bike">Bike</option>
                                        <option value="jsv">JSV</option>
                                    </select>

                                </div>
                                <div class="col-md-4">
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
                                <div class="col-md-4">
                                    <label for="price" class="form-label">Price</label>
                                    <input type="text" class="form-control" id="price" />
                                </div>
                                <div class="col-md-4">
                                    <label for="price" class="form-label">Quantity</label>
                                    <input type="text" class="form-control" id="price" />
                                </div>

                                <div class="col-md-8">
                                    <label for="formFileMultiple" class="form-label">Product Image</label>
                                    <input class="form-control" type="file" id="formFileMultiple" multiple accept=".jpeg,.jpg,.png" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Restore Product</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product">
                <Link to="/newProduct">
                    <button type="button" className="btn btn-primary newBtn">Add New Product</button>
                </Link>
                <div className="product_head">
                    <h4 style={{ marginLeft: '20px' }}>Trashed Product</h4>
                </div>
                <hr />
                <div className="product_info">
                    <table>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Sub Category</th>
                            <th>Modal Name</th>
                            <th>Brand</th>
                            <th>Restore Product</th>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td><i class="fa-solid fa-trash-can-arrow-up mx-2" role='button' onClick={handleEdit}></i></td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Trashproduct