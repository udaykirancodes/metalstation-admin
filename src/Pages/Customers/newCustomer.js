import React, { useState } from 'react'
import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './newCustomer.css'
import Context from '../../context/Context';
import { backendurl, GetUserProfileUrl, GetUserWishList, GetUserCartUrl } from "../../urls";

const NewCustomer = ({ showAlert }) => {
  let navigate = useNavigate();

  const { users } = useContext(Context);
  const [search, setSearch] = useState('');

  useEffect(() => {
    let adminToken = localStorage.getItem('adminToken');
    if (!adminToken) {
      navigate('/login');
    }
    showAlert('Here are our Customers :)', 'success');
  }, [])

  const [profile, setprofile] = useState({
    name: '-',
    address: {
      pincode: '-',
      city: '-',
      location: '-',
      state: '-',
      town: '-'
    }
  });
  // Profile View Option
  const getProfile = async (id) => {
    let adminToken = localStorage.getItem('adminToken');
    if (!adminToken) {
      navigate('/login');
    }
    let url = GetUserProfileUrl + id;
    if (id) {
      let res = await fetch(url, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'adminToken': adminToken
        }
      });
      let data = await res.json();
      if (data.success) {
        setprofile(data.user);
      }
    }
  }
  const [wishlist, setwishlist] = useState([]);
  // WishList Option  
  const getWishlist = async (id) => {
    let adminToken = localStorage.getItem('adminToken');
    if (!adminToken) {
      navigate('/login');
    }
    let url = GetUserWishList + id;
    if (id) {
      let res = await fetch(url, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'adminToken': adminToken
        }
      });
      let data = await res.json();
      if (data.success) {
        setwishlist(data.products);
      }
    }
  }

  const [cart, setcart] = useState(
    {
      products: []
    }
  );
  // Buy Cart Option  
  const getBuyCart = async (id) => {
    let adminToken = localStorage.getItem('adminToken');
    if (!adminToken) {
      navigate('/login');
    }
    let url = GetUserCartUrl + id;
    if (id) {
      let res = await fetch(url, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'adminToken': adminToken
        }
      });
      let data = await res.json();
      if (data.success) {
        if (data.cart.length !== 0) {
          setcart(data.cart[0]);
        }
        else {
          setcart({ products: [] })
        }
      }
    }
  }
  // date work  
  function getDateString(date) {
    let a = new Date(date);
    return a.toDateString();
  }
  return (
    <div>
      <div className="container-fluid customerpage">
        <div className="container-fluid navdown mb-4 mt-4">
          <div className="row mt-3">
            <div className="col-md-3 serch-box marginform">
              <div className="container-fluid">
                <form className="d-flex">
                  <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="form-control" style={{ backgroundColor: "#EAEAEA" }} placeholder="Search by User ID or Email" aria-label="Username" />
                </form>
              </div>

            </div>
            {/* <div className="col-md-3 drop1">
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
            {/* <div className="col-md-3 drop2">
              <div className="dropdown">
                <Link className="btn  dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Filter By Active Transactions
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


        <table className="table">

          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Customer Code</th>
              <th scope="col">Joined Date</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Profile</th>
              <th scope="col">Wishlist</th>
              <th scope="col">Buy Cart</th>
            </tr>
          </thead>
          <tbody>
            {
              search ?
                users.map((u, index) => {
                  let s = search.toLowerCase();
                  if (u._id.includes(s) || u.email.includes(s) || u.name.includes(s)) {
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{u._id}</td>
                        <td>{getDateString(u.createdAt)}</td>
                        <td>{u.name} <br /> {u.phone}  <br /> {u.email}</td>
                        <td>
                          <p onClick={() => getProfile(u._id)} className="view" data-bs-toggle="modal" data-bs-target="#staticBackdrop">View
                          </p>
                        </td>
                        <td>
                          <p onClick={() => getWishlist(u._id)} className="view" data-bs-toggle="modal" data-bs-target="#exampleModal">View
                          </p>
                        </td>
                        <td>
                          <p onClick={() => getBuyCart(u._id)} className="view" data-bs-toggle="modal" data-bs-target="#exampleModal3">View
                          </p>
                        </td>
                      </tr>
                    )
                  }
                })
                :
                users.map((u, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{u._id}</td>
                      <td>{getDateString(u.createdAt)}</td>
                      <td>{u.name} <br /> {u.phone}  <br /> {u.email}</td>
                      <td>
                        <p onClick={() => getProfile(u._id)} className="view" data-bs-toggle="modal" data-bs-target="#staticBackdrop">View
                        </p>
                      </td>
                      <td>
                        <p onClick={() => getWishlist(u._id)} className="view" data-bs-toggle="modal" data-bs-target="#exampleModal">View
                        </p>
                      </td>
                      <td>
                        <p onClick={() => getBuyCart(u._id)} className="view" data-bs-toggle="modal" data-bs-target="#exampleModal3">View
                        </p>
                      </td>
                    </tr>
                  )
                })
            }
            {/* <tr>
              <th scope="row">1</th>
              <td>10874</td>
              <td>09/12/22</td>
              <td>Lorem ispusm</td>
              <td><Link className="view" to="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">View
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body">


                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                        <div className="row user text-center">
                          <div className="col-12">
                            <i className="bi bi-person-circle"></i>
                          </div>
                          <div className="col-12">
                            <h4>Lorem, ipsum.</h4>
                          </div>
                          <div className="col-12">
                            <h6>Profile</h6>
                          </div>
                        </div>
                      </div>
                      <div className="modal-body">
                        <p><b>Billing Address:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</p>

                        <p><b>Address:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</p>
                      </div>

                    </div>
                  </div>
                </div></Link></td>





              <td><Link className="view" to="#" data-bs-toggle="modal" data-bs-target="#exampleModal">View


                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">


                      <div className="modal-body">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                        <div className="row user text-center">
                          <div className="col-12">
                            <i className="bi bi-person-circle"></i>

                          </div>

                          <div className="col-12">
                            <h4>Lorem, ipsum.</h4>
                          </div>
                          <div className="col-12">
                            <h6>Wishlist</h6>
                          </div>
                        </div>
                        <div className="row justify-content-around mb-3 user1 ">

                          <div className="col-md-4 bg-box mb-1">
                            <div className="row">
                              <img src="/metal.png" className="img-fluid" alt="" />
                            </div>
                            <div className="row">
                              <div className="col-12 mt-2">
                                <h5>Aluminium Scrap</h5>
                                <p><b>1 ton</b>  (Min Order)</p>
                                <span>&#x20b9;1,39,999</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 bg-box mb-1"> <div className="row">
                            <img src="/metal.png" className="img-fluid" alt="" />
                          </div>
                            <div className="row">
                              <div className="col-12 mt-2">
                                <h5>Aluminium Scrap</h5>
                                <p><b>1 ton</b>  (Min Order)</p>
                                <span>&#x20b9;1,39,999</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 bg-box mb-1"> <div className="row">
                            <img src="/metal.png" className="img-fluid" alt="" />
                          </div>
                            <div className="row">
                              <div className="col-12 mt-2">
                                <h5>Aluminium Scrap</h5>
                                <p><b>1 ton</b>  (Min Order)</p>
                                <span>&#x20b9;1,39,999</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row justify-content-around mb-3 user1">

                          <div className="col-md-4 bg-box mb-1">
                            <div className="row">
                              <img src="/metal.png" className="img-fluid" alt="" />
                            </div>
                            <div className="row">
                              <div className="col-12 mt-2">
                                <h5>Aluminium Scrap</h5>
                                <p><b>1 ton</b>  (Min Order)</p>
                                <span>&#x20b9;1,39,999</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 bg-box mb-1"> <div className="row">
                            <img src="/metal.png" className="img-fluid" alt="" />
                          </div>
                            <div className="row">
                              <div className="col-12 mt-2">
                                <h5>Aluminium Scrap</h5>
                                <p><b>1 ton</b>  (Min Order)</p>
                                <span>&#x20b9;1,39,999</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 bg-box mb-1"> <div className="row">
                            <img src="/metal.png" className="img-fluid" alt="" />
                          </div>
                            <div className="row">
                              <div className="col-12 mt-2">
                                <h5>Aluminium Scrap</h5>
                                <p><b>1 ton</b>  (Min Order)</p>
                                <span>&#x20b9;1,39,999</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>


              </Link></td>

              <td><Link className="view" to="#" data-bs-toggle="modal" data-bs-target="#exampleModal2">View





              </Link></td>


              <td>
                <Link className="view" to="#" data-bs-toggle="modal" data-bs-target="#exampleModal3">View


                </Link>
              </td>

            </tr> */}


          </tbody>
        </table>
        {/* Modal for Profile */}
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div className="row user text-center">
                  <div className="col-12">
                    <i className="bi bi-person-circle"></i>
                  </div>
                  <div className="col-12">
                    <h4>{profile.name ? profile.name : ''}</h4>
                  </div>
                  <div className="col-12">
                    <h6>Profile</h6>
                  </div>
                </div>
              </div>
              <div className="modal-body">
                <p style={{ textAlign: 'center' }}><b>Address:</b> <br />{profile.address.pincode ? profile.address.pincode : ''} <br />{profile.address.city ? profile.address.city : ''} <br /> {profile.address.town ? profile.address.town : ''} <br /> {profile.address.state ? profile.address.state : ''}<br /> </p>
              </div>
            </div>
          </div>
        </div>
        {/* Modal for WishList */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div className="row user text-center">
                  <div className="col-12">
                    <i className="bi bi-person-circle"></i>
                  </div>
                  <div className="col-12">
                    <h4>Profile</h4>
                  </div>
                  <div className="col-12">
                    <h6>Wishlist</h6>
                  </div>
                </div>
                <div className="row justify-content-around mb-3 user1 ">
                  {
                    wishlist.map((w, index) => {
                      return (
                        <div key={index} className="col-md-4 bg-box mb-1">
                          <div className="row">
                            <img src={backendurl + w.img[0]} className="img-fluid" alt="" />
                          </div>
                          <div className="row">
                            <div className="col-12 mt-2">
                              <h5>{w.name}</h5>
                              <p><b>1 ton</b>  (Min Order)</p>
                              <span>&#x20b9;{w.price ? w.price : null}</span>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }

                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Modal for Buy Cart */}
        <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">

              <div className="modal-body ">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                <div className="row user text-center">
                  <div className="col-12">
                    <i className="bi bi-person-circle"></i>
                  </div>
                  <div className="col-12">
                    <h4>Profile</h4>
                  </div>
                  <div className="col-12">
                    <h6>Buy Cart</h6>
                  </div>
                </div>

                <div className="row justify-content-around mb-3 user1">
                  {
                    cart.products.length &&
                    cart.products.map((b, index) => {
                      let pro = b.product[0]
                      return (
                        <div key={index} className="col-md-4 bg-box mb-1">
                          <div className="row">
                            <img src={backendurl + pro.img[0]} className="img-fluid" alt="" />
                          </div>
                          <div className="row">
                            <div className="col-12 mt-2">
                              <h5>{b.name}</h5>
                              <p><b>1 ton</b>  (Min Order)</p>
                              <span>&#x20b9;{b.price}</span>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div >

  )
}

export default NewCustomer