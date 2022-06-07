import React from 'react'
import './brand.css'

const Brand = (props) => {
    const {showAlert} = props;
    const handleSubmit = ()=>{
        showAlert("You Have Added the Brand Successfully!!!","success")
    }
    return (
        <>
            <div className="brand">
                <div className="brand_table">
                    <div className="col-md-6 d-flex">
                        <div className="brand_head" style={{ marginRight: '44%', marginLeft: '20px' }}>
                            <h4>Brand</h4>
                        </div>
                        <div className="brand_head_search col-md-2">
                            <input type="text" className="form-control" id="price" placeholder='Search By Brand Name' />
                        </div>
                    </div>
                    <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                        <div className="brand_info">
                            <table>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Logo</th>
                                    <th>Option</th>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="add_brand col-md-4">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="formFile" class="form-label"><span>logo <small>(180 x 60)</small></span></label>
                        <input class="form-control" type="file" id="formFile" accept=".jpeg,.jpg,.png" />
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-3" onClick={handleSubmit}>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brand