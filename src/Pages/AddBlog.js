import React from 'react'
import './addblog.css'
const AddBlog = (props) => {
    const {showAlert} = props;
    const handleSubmit = () => {
        showAlert("You Blog is Published Successfully!!!", "success")
    }
    return (
        <div>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Adding New Blog</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Confirm Before Publishing New Blog
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>Add Blog</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="add_Blog col-md-10 mx-auto">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Title</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title Of Blog" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" placeholder='Blog Description'></textarea>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label"><span>Image</span></label>
                    <input class="form-control" type="file" id="formFile" accept=".jpeg,.jpg,.png" />
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Publish Blog</button>
                </div>
            </div>
        </div>
    )
}

export default AddBlog
