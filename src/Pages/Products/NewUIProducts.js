/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useState } from 'react'
import './newuiproducts.css'
import { Link } from 'react-router-dom'
import Context from '../../context/Context';
import { backendurl } from '../../urls';
const NewUIProducts = () => {

  const [arrowUp, setArrowUp] = useState(false);
  const [input, setinput] = useState({});
  const { products } = useContext(Context);
  const handleChange = () => {

  }
  const EditProduct = async () => {

  }
  const handleEdit = () => {

  }
  const element = ""
  const refClose = () => {

  }
  return (
    <div>
      <div className="category_bar_left mobile_none">
        <div className="all-category-hover">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="category_text" onMouseEnter={() => setArrowUp(true)} onMouseLeave={() => setArrowUp(false)} >All Categories {arrowUp ?
              <i className="uil uil-angle-up arrow-icon" style={{ fontSize: '16px' }}></i> : <i className="uil uil-angle-down arrow-icon"></i>}  </span>
          </div>

          <div className="onHoverCategories" onMouseEnter={() => setArrowUp(true)} onMouseLeave={() => setArrowUp(false)}>
            <ul className='onHover-ul light-bg'>
              <li className='onHover-li-main'>STEEL</li>
              <li className='onHover-li'>Steel Rod</li>
              <li className='onHover-li'>Steel Pipe</li>
              <li className='onHover-li'>Steel Wire</li>
              <li className='onHover-li'>Steel Bar</li>
              <li className='onHover-li'>Steel Foundary</li>
            </ul>
            <ul className='onHover-ul light-bg-2'>
              <li className='onHover-li-main'>ALUMINIUM</li>
              <li className='onHover-li'>Aluminium Rod</li>
              <li className='onHover-li'>Aluminium Pipe</li>
              <li className='onHover-li'>Aluminium Wire</li>
              <li className='onHover-li'>Aluminium Bar</li>
              <li className='onHover-li'>Aluminium Foundary</li>
            </ul>
            <ul className='onHover-ul light-bg'>
              <li className='onHover-li-main'>COPPER</li>
              <li className='onHover-li'>Copper Rod</li>
              <li className='onHover-li'>Copper Pipe</li>
              <li className='onHover-li'>Copper Wire</li>
              <li className='onHover-li'>Copper Bar</li>
              <li className='onHover-li'>Copper Foundary</li>
            </ul>
            <ul className='onHover-ul light-bg-2'>
              <li className='onHover-li-main'>MACHINERY</li>
              <li className='onHover-li'>Steel Rod</li>
              <li className='onHover-li'>Steel Pipe</li>
              <li className='onHover-li'>Steel Wire</li>
            </ul>
            <ul className='onHover-ul light-bg'>
              <li className='onHover-li-main'>AUTO PARTS</li>
              <li className='onHover-li'>Steel Rod</li>
              <li className='onHover-li'>Steel Pipe</li>
              <li className='onHover-li'>Steel Wire</li>
            </ul>
          </div>
        </div>
        <span className="category_text">STEEL</span>
        <span className="category_text">ALUMINIUM</span>
        <span className="category_text">COPPER</span>
        <span className="category_text">IRON</span>
      </div>


      <div class="container-fluid navdown mb-4 mt-4">
        <div class="row mt-3 m-5 contain">
          <div class="col-md-3 serch-box">
            <div class="container-fluid">
              <form class="d-flex">
                <input type="text" class="form-control" style={{ "background-color": "#EAEAEA" }} placeholder="Search by Product Code" aria-label="Username" />
              </form>
            </div>

          </div>
          <div class="col-md-3 ">
            <div class="dropdown">
              <Link class="btn  dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Sort by
              </Link>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><Link class="dropdown-item" to="#">Action</Link></li>
                <li><Link class="dropdown-item" to="#">Another action</Link></li>
                <li><Link class="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="cards">
        {
          products.map((pro, index) => {
            return (
              <div key={index} className="card">
                <div className="card__image-container">
                  <img
                    src={backendurl + pro.img[0]}
                    alt="image"
                  />
                </div>
                <div className="card__content">
                  <h4 className="card__title">
                    {pro.name}
                  </h4>
                  <p ><b>1 Ton </b><small> (Min. Order)</small></p>
                  {
                    pro.price ?
                      <h4 className="card__price">₹{pro.price}/-</h4>
                      :
                      <p>No Price for this product</p>
                  }
                </div>
                <div className='d-flex justify-content-around mb-1'>
                  <button className='btn btn-sm btn-warning' data-bs-toggle="modal" data-bs-target="#modelforedit" onClick={() => handleEdit(element._id)}>Edit</button>
                  <button className='btn btn-sm btn-danger' data-bs-toggle="modal" data-bs-target="#modelforedit" onClick={() => handleEdit(element._id)}>Delete</button>
                </div>
                {/* <i className="fa-solid .text-success fa-file-pen mx-2" role='button' data-bs-toggle="modal" data-bs-target="#modelforedit" onClick={() => handleEdit(element._id)}></i> */}
              </div>
            )
          })
        }
      </div>
      {/* Modal for editing */}
      <div className="modal fade" id="modelforedit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Update Product</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">Name of the Product</label>
                  <input type="text" name='name' onChange={(e) => handleChange(e)} value={input.name || ''} className="form-control" id="name" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">Description of the Product</label>
                  <input type="text" name='description' onChange={(e) => handleChange(e)} value={input.description || ''} className="form-control" id="name" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">Short Description</label>
                  <input type="text" name='shortdescription' onChange={(e) => handleChange(e)} value={input.description || ''} className="form-control" id="shortdescription" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="modelName" className="form-label">Model Name</label>
                  <input type="text" name='modelname' onChange={(e) => handleChange(e)} value={input.modelname || ''} className="form-control" id="modelName" />
                </div>

                <div className="col-md-2">
                  <label htmlFor="price" className="form-label">Price</label>
                  <input type="text" name='price' onChange={(e) => handleChange(e)} value={input.price || ''} className="form-control" id="price" />
                </div>
                <div className="col-md-2">
                  <label htmlFor="priceRange" className="form-label">Price Range</label>
                  <input type="text" name='priceRange' onChange={(e) => handleChange(e)} value={input.price || ''} className="form-control" id="priceRange" />
                </div>
                <div className="col-md-2">
                  <label htmlFor="length" className="form-label">Length</label>
                  <input type="text" name='length' onChange={(e) => handleChange(e)} value={input.price || ''} className="form-control" id="length" />
                </div>
                <div className="col-md-2">
                  <label htmlFor="height" className="form-label">Height</label>
                  <input type="text" name='height' onChange={(e) => handleChange(e)} value={input.price || ''} className="form-control" id="height" />
                </div>
                <div className="col-md-2">
                  <label htmlFor="width" className="form-label">Width</label>
                  <input type="text" name='width' onChange={(e) => handleChange(e)} value={input.price || ''} className="form-control" id="width" />
                </div>
                <div className="col-md-2">
                  <label htmlFor="weight" className="form-label">Weight</label>
                  <input type="text" name='weight' onChange={(e) => handleChange(e)} value={input.price || ''} className="form-control" id="weight" />
                </div>
                <div className="col-md-2">
                  <label htmlFor="color" className="form-label">Color</label>
                  <input type="text" name='color' onChange={(e) => handleChange(e)} value={input.price || ''} className="form-control" id="color" />
                </div>
                <div className="container">
                  <section className="ImagePreview">
                    {/* <div className={iPCss.ImageInputContainer}> */}
                    {/* <label className="ImageLabel">
                      + Add Images
                      <br />
                      <input
                        type="file"
                        name="images"
                        onChange={onSelectFile}
                        multiple
                        accept="image/png , image/jpeg, image/webp, application/pdf"
                        className="ImagePreviewInput"
                      />
                    </label> */}
                    <br />

                    <input className="ImagePreviewInput" type="file" multiple />

                    {/* {selectedImages.length === 0 ? "" : <div className="images">
                      {selectedImages &&
                        selectedImages.map((image, index) => {
                          return (
                            <div key={image} className="image">
                              <img className="preview" src={image}

                                height={200}
                                width={300}
                                alt="upload" />
                              <div className="ImgDelete">

                                <button className="ImageDelete" onClick={() => deleteHandler(image)}>
                                  x
                                </button>
                              </div>
                              <p className="ImageP">{index + 1}</p>
                            </div>
                          );
                        })} 
                    </div>}
                        */}
                    <i className="fa-solid fa-file-pen mx-2" role='button' data-bs-toggle="modal" data-bs-target="#modelforedit" onClick={() => handleEdit(element._id)}>E</i>
                  </section>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" onClick={EditProduct} className="btn btn-primary" data-bs-dismiss="modal">Update Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewUIProducts