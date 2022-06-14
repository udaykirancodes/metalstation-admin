import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GetAllProducts , ProductDeleteUrl} from '../urls'
import './product.css'

const Products = (props) => {
    const navigate = useNavigate(); 
    const { showAlert } = props
    const ref = useRef(null)
    const refClose = useRef(null)



    // state 
    const [products , setProducts ] = useState([]); 

    // fetch all the products :: 
    useEffect(()=>{
        fetch(GetAllProducts,{
            method:"GET",
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then((res)=>res.json())
        .then(data => {
            if(data.success){
                setProducts(data.products); 
                showAlert("Fetched Successfully",'success'); 
            }
            else{
                showAlert(data.msg,'danger'); 
            }
        })
    },[])
    // store id 
    const [id , setId] = useState('');
    
    // function to delete the product 
    const DeleteProduct = ()=>{
        console.log('deleting'); 
        if(!id){
            showAlert("Cannot Delete",'danger');
            return ;
        }
        console.log('hello'); 
        // deleting the blog 
        let adminToken = localStorage.getItem('adminToken'); 
        if(!adminToken){
            navigate('/login'); 
        }
        fetch(ProductDeleteUrl , {
            method:"PUT",
            headers: {
                'Content-Type':'application/json',
                'adminToken':adminToken 
            },
            body : JSON.stringify({
                id : id 
            })

        })
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data); 
            if(data.success === true){
                // delete in the frontend
                let newProducts = products.filter((element)=>{
                    if(element._id !== id){
                        return element  
                    }
                    else{
                        element.isDeleted = true ; 
                        return element 
                    }
                })
                setProducts(newProducts); 
                setId(''); 
                showAlert("Deleted Successfully",'success'); 
            }
            else{
                showAlert(data.msg,'danger'); 
            }
        })
        .catch(err=>{
            console.log(err.message); 
        })
    }
    return (

        <>
            {/* Model For Editing */}
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="modelforedit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" >Update Product</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal for deletion--> */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Deleting Product</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you sure ? Move to Trash!!!
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={DeleteProduct} data-bs-dismiss="modal">Delete Product</button>
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
                </div>
                <hr />
                <div className="product_info">
                    <table>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Modal Name</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>State</th>
                            <th>Upadte Product</th>
                        </tr>
                        {
                            products.map((element,index)=>{
                                return <tr key={index}>
                                <td>{index+1}</td>
                                <td>{element.name}</td>
                                <td>{element.category}</td>
                                <td>{element.description}</td>
                                <td>{element.details.modelname}</td>
                                <td>{element.details.brand}</td>
                                <td>{element.price}</td>
                                <td>{element.isDeleted ? "Out of Stock" : "In Stock"}</td>
                                <td>
                                    <i class="fa-solid fa-trash mx-2" role='button' data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=>setId(element._id)}>D</i> 
                                    <i class="fa-solid fa-file-pen mx-2" role='button' data-bs-toggle="modal" data-bs-target="#modelforedit" onClick={()=>setId(element._id)}>E</i> 
                                </td>
                            </tr>
                            })
                        }
                        
                    </table>
                </div>
            </div>
        </>
    )
}

export default Products