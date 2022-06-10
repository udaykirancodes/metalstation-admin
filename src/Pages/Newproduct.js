import React, { useState } from 'react'
import Select from 'react-select';
import './newProduct.css'




const Newproduct = (props) => {
    const { showAlert } = props;
    const options = [
        { value: 'stell', label: 'Stell' },
        { value: 'aluminum', label: 'Aluminum' },
        { value: 'copper', label: 'Copper' },
    ];

    const handleSubmit = () => {
        showAlert("You Have Added New Product Successfully", "success");
    }

    const [state, setState] = useState('')

    const handleChange = selectedOption => {
        setState({ selectedOption });
    };
    const { selectedOption } = state;
    return (
        <>
            {/* <!-- Button trigger modal --> */}


            {/* <!-- Modal --> */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Confirm Before adding New Product
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="newProduct container">
                <form class="row g-3" onSubmit={handleSubmit}>
                    <div class="col-md-6">
                        <label for="name" class="form-label">Name of the Product</label>
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
                    <div class="col-md-2">
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

                    <div class="mb-3">
                        <label for="formFileMultiple" class="form-label">Product Image</label>
                        <input class="form-control" type="file" id="formFileMultiple" multiple accept=".jpeg,.jpg,.png" />
                    </div>
                    <button style={{width:"60px", marginBottom:"10%"}} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Add
                    </button>
                </form>
            </div>
        </>
    )
}

export default Newproduct