/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useState, useEffect } from 'react'
import './newuiproducts.css'
import { Link, useNavigate } from 'react-router-dom'
import Context from '../../context/Context';
import { backendurl, EditProductUrl, ProductDeleteUrl } from '../../urls';
import Pagination from '../../components/Pagination';


const NewUIProducts = ({ showAlert }) => {

  const navigate = useNavigate()

  const [arrowUp, setArrowUp] = useState(false);
  const [input, setinput] = useState({
    id: '',
    name: '',
    description: '',
    shortDescription: '',
    price: null,
    minPrice: null,
    maxPrice: null,
    heigth: '',
    width: '',
    length: '',
    weight: '',
    color: ''
  });
  useEffect(() => {
    let token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/login')
      return;
    }
  }, [])
  const { products, setproducts } = useContext(Context);
  const [id, setid] = useState('');
  const [search, setsearch] = useState('');
  // pagination related code 
  const [currentpage, setcurrentpage] = useState(1);
  const [perPage, setPerPage] = useState(8);

  const indexOfLast = currentpage * perPage;
  const indexOfFirst = indexOfLast - perPage;


  const handleChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value })
  }
  const checkForCheckBox = (e) => {
    if (e.target.checked) {
      setinput({ ...input, isFeatured: e.target.checked })
    }
    else {
      setinput({ ...input, isFeatured: e.target.checked })
    }
  }
  const EditProduct = async () => {
    let adminToken = localStorage.getItem('adminToken');
    if (input.length > 0) {
      return;
    }
    let form = new FormData();
    form.append('id', id);
    if (input.name) {
      form.append('name', input.name);
    }
    if (input.description) {
      form.append('description', input.description);
    }
    if (input.shortDescription) {
      form.append('shortDescription', input.shortDescription);
    }
    if (input.price) {
      form.append('price', input.price);
    }
    if (input.minPrice && input.maxPrice) {
      form.append('minPrice', parseInt(input.minPrice));
      form.append('maxPrice', parseInt(input.maxPrice));
    }
    if (input.heigth) {
      form.append('heigth', input.height);
    }
    if (input.width) {
      form.append('width', input.width);
    }
    if (input.length) {
      form.append('length', input.length);
    }
    if (input.weight) {
      form.append('weight', input.weight);
    }
    if (input.color) {
      form.append('color', input.color);
    }
    // return;
    // form.append('category', input.category);
    // form.append('subCategory', input.subCategory);
    // form.append('isFeatured', input.isFeatured);
    let res = await fetch(EditProductUrl, {
      method: "PUT",
      headers: {
        'boundary': 'MyBoundary',
        'adminToken': adminToken
      },
      body: form
    })
    let data = await res.json();
    if (data.success) {
      let s = products.map((p) => {
        if (p._id === id) {
          return data.data
        }
        return p;
      })
      setproducts(s);
    }
    else {
      alert(data.msg);
    }
  }
  const handleEdit = (id) => {
    setid(id);
    console.log(id);
    let b = products.filter((pro) => pro._id === id);
    let a = b[0];
    setinput(a);
  }

  const handleDelete = (id) => {
    setid(id);
  }
  const DeleteProduct = () => {
    let adminToken = localStorage.getItem('adminToken');
    if (!id) {
      showAlert("Cannot Delete", 'danger');
      return;
    }
    fetch(ProductDeleteUrl, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'adminToken': adminToken
      },
      body: JSON.stringify({
        id: id
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          // delete in the frontend
          let newProducts = products.filter((element) => {
            if (element._id !== id) {
              return element
            }
            else {
              element.isDeleted = true;
              return element
            }
          })
          setproducts(newProducts);
          setid('');
          showAlert("Deleted Successfully", 'success');
        }
        else {
          showAlert(data.msg, 'danger');
        }
      })
      .catch(err => {
        console.log(err.message);
      })
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


      <div className="container-fluid navdown mb-4 mt-4">
        <div className="row mt-3 m-5 contain">
          <div className="col-md-3 serch-box">
            <div className="container-fluid">
              <form className="d-flex">
                <input type="text" className="form-control" onChange={(e) => setsearch(e.target.value)} value={search} style={{ backgroundColor: "#EAEAEA" }} placeholder="Search by Product Code" aria-label="Username" />
              </form>
            </div>

          </div>
          {/* <div className="col-md-3 ">
            <div className="dropdown">
              <Link className="btn  dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Sort by
              </Link>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><Link className="dropdown-item" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>

      <div className="cards">
        {
          search ?
            products.map((pro, index) => {
              let s = search.toLocaleLowerCase();
              let name = pro.name.toLocaleLowerCase();
              if (name.includes(s) || pro._id.includes(s)) {

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
                      <button className='btn btn-sm btn-warning' data-bs-toggle="modal" data-bs-target="#modelforedit" onClick={() => handleEdit(pro._id)}>Edit</button>
                      <button className='btn btn-sm btn-danger' data-bs-toggle="modal" data-bs-target="#modelfordelete" onClick={() => handleDelete(pro._id)}>Delete</button>
                    </div>
                    {/* <i className="fa-solid .text-success fa-file-pen mx-2" role='button' data-bs-toggle="modal" data-bs-target="#modelforedit" onClick={() => handleEdit(element._id)}></i> */}
                  </div>
                )
              }

            })
            :
            products.map((pro, index) => {
              if (index >= indexOfFirst && index < indexOfLast) {
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
                      <button className='btn btn-sm btn-warning' data-bs-toggle="modal" data-bs-target="#modelforedit" onClick={() => handleEdit(pro._id)}>Edit</button>
                      <button className='btn btn-sm btn-danger' data-bs-toggle="modal" data-bs-target="#modelfordelete" onClick={() => handleDelete(pro._id)}>Delete</button>
                    </div>
                    {/* <i className="fa-solid .text-success fa-file-pen mx-2" role='button' data-bs-toggle="modal" data-bs-target="#modelforedit" onClick={() => handleEdit(element._id)}></i> */}
                  </div>
                )
              }
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
                <div className="col-md-12">
                  <label htmlFor="name" className="form-label">Name of the Product</label>
                  <input type="text" name='name' onChange={(e) => handleChange(e)} value={input.name || ''} className="form-control" id="name" />
                </div>
                <div className="col-md-12">
                  <label htmlFor="name" className="form-label">Description of the Product</label>
                  <textarea name='description' onChange={(e) => handleChange(e)} value={input.description || ''} className="form-control" id="name" />
                </div>
                <div className="col-md-12">
                  <label htmlFor="name" className="form-label">Short Description</label>
                  <input type="text" name='shortDescription' onChange={(e) => handleChange(e)} value={input.shortDescription || ''} className="form-control" id="shortdescription" />
                </div>

                <div className="col-md-2">
                  <label htmlFor="length" className="form-label">Length</label>
                  <input type="text" name='length' onChange={(e) => handleChange(e)} value={input.length || ''} className="form-control" id="length" />
                </div>
                <div className="col-md-2">
                  <label htmlFor="height" className="form-label">Height</label>
                  <input type="text" name='height' onChange={(e) => handleChange(e)} value={input.height || ''} className="form-control" id="height" />
                </div>
                <div className="col-md-2">
                  <label htmlFor="width" className="form-label">Width</label>
                  <input type="text" name='width' onChange={(e) => handleChange(e)} value={input.width || ''} className="form-control" id="width" />
                </div>
                <div className="col-md-2">
                  <label htmlFor="weight" className="form-label">Weight</label>
                  <input type="text" name='weight' onChange={(e) => handleChange(e)} value={input.weight || ''} className="form-control" id="weight" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="color" className="form-label">Color</label>
                  <input type="text" name='color' onChange={(e) => handleChange(e)} value={input.color || ''} className="form-control" id="color" />
                </div>
                <div className="col-md-2">
                </div>
                <div className="col-md-4">
                  <label htmlFor="price" className="form-label">Price</label>
                  <input type="number" name='price' onChange={(e) => handleChange(e)} value={input.price || ''} className="form-control" id="price" />
                </div>
                <div className="col-md-3">
                  <label htmlFor="maxPrice" className="form-label">MaxPrice</label>
                  <input type="number" name='maxPrice' onChange={(e) => handleChange(e)} value={input.maxPrice || ''} className="form-control" id="priceRange" />
                </div>
                <div className="col-md-3">
                  <label htmlFor="minPrice" className="form-label">MinPrice</label>
                  <input type="number" name='minPrice' onChange={(e) => handleChange(e)} value={input.minPrice || ''} className="form-control" id="priceRange" />
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-4">
                  <label htmlFor="category" className="form-label">Category</label>
                  <select id="category" className="form-select" name='category' onChange={(e) => handleChange(e)}>
                    <option value="">Choose...</option>
                    <option value="steel">Stell</option>
                    <option value="aluminium">Aluminium</option>
                    <option value="copper">Copper</option>
                    <option value="machinery">Machinery</option>
                    <option value="autoparts">Autoparts</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="subCategory" className="form-label">Sub Category</label>
                  <select id="subCategory" className="form-select" name='subCategory' onChange={(e) => handleChange(e)}>
                    <option value="">Choose...</option>
                    <option value="rod">Rod</option>
                    <option value="wire">Wire</option>
                    <option value="pipe">Pipe</option>
                    <option value="bar">Bar</option>
                  </select>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(e) => checkForCheckBox(e)} />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Featured
                  </label>
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

                    {/* <input className="ImagePreviewInput" type="file" multiple /> */}

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
                    {/* <i className="fa-solid fa-file-pen mx-2" role='button' data-bs-toggle="modal" data-bs-target="#modelforedit" onClick={() => handleEdit(element._id)}>E</i> */}
                  </section>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" onClick={EditProduct} className="btn btn-primary" data-bs-dismiss="modal">Update Product</button>
            </div>
          </div>
        </div>
      </div>

      <Pagination currentproducts={products.length / perPage} currentpage={currentpage} setcurrentpage={setcurrentpage} />
      {/* <!-- Modal for deletion--> */}
      <div className="modal fade" id="modelfordelete" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Deleting Product</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Are you sure ? Move to Trash!!!
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={DeleteProduct} data-bs-dismiss="modal">Delete Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewUIProducts