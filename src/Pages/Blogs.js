import React from 'react'
import { useRef } from 'react'
import './blog.css'
const Blogs = (props) => {
    const { showAlert } = props
    const ref = useRef(null)
    const refClose = useRef(null)

    const handleEdit = () => {
        ref.current.click();
    }
    const handleClick = (e) => {
        refClose.current.click()
        showAlert("Your Blog has been updated", "success")
        e.preventDefault();
    }
    const handleSubmit = () => {
        showAlert("You Blog is Deleted!!!", "success")
    }
    return (
        <>
            {/* Modal For Edit */}
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Blog</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form class="row g-3">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Title</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title Of Blog" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Description</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" placeholder='Blog Description'></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Update Blog</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal For Edit */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Deleting Blog</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Confirm Before Deleting Blog
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>Delete Blog</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog">
                <div className="blog_table mx-auto">
                    <div className="col-md-10 d-flex">
                        <div className="blog_head" style={{ marginRight: '44%', marginLeft: '20px' }}>
                            <h4>Blog</h4>
                        </div>
                        <div className="blog_head_search col-md-2">
                            <input type="text" className="form-control" id="price" placeholder='Search By Title' />
                        </div>
                    </div>
                    <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                        <div className="blog_info">
                            <table>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th className='description'>Description</th>
                                    <th className='image'>Image</th>
                                    <th>Option</th>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>-</td>
                                    <td className='description'>-</td>
                                    <td className='image'>-</td>
                                    <td><i class="fa-solid fa-trash mx-2" role='button' data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i> <i class="fa-solid fa-file-pen mx-2" role='button' onClick={handleEdit}></i> </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs