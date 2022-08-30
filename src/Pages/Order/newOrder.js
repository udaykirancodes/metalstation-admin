import React, { useState, useEffect, useContext } from 'react'
import './neworder.css'
import { Link, useNavigate } from 'react-router-dom'
import { GetAllOrders, AcceptOrderUrl } from "../../urls";
import Pagination from "../../components/Pagination";
import Context from '../../context/Context';


const NewOrder = ({ showAlert }) => {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');

  const { Orders, setOrders } = useContext(Context);

  // pagination related code 
  const [currentpage, setcurrentpage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const indexOfLast = currentpage * perPage;
  const indexOfFirst = indexOfLast - perPage;

  // accept an order 
  const UpdateOrder = (id, status) => {
    let token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/login');
    }
    fetch(AcceptOrderUrl, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'adminToken': token
      },
      body: JSON.stringify({
        orderid: id,
        status: status
      })
    })
      .then((res) => res.json())
      .then(data => {
        if (data.success) {
          // showAlert('Order Status Updated', 'success');
          // update in the frontend 
          let newOrders = Orders.map((ord) => {
            if (ord._id === id) {
              ord.items[0].status = status
              console.log(status)
            }
            return ord
          })
          setOrders(newOrders);
        }
        else {
          showAlert(data.msg, 'danger');
        }
      })
  }

  useEffect(() => {
    let adminToken = localStorage.getItem('adminToken');
    if (!adminToken) {
      navigate('/login')
      return;
    }
  }, [])

  const getdate = (data) => {
    let date = new Date(data);
    return date.toDateString();
  }

  return (
    <div>
      <div className="container-fluid orderpage" >
        <div className="container-fluid" >
          <div className="container-fluid navdown mb-4 mt-4">
            <div className="row mt-3">
              <div className="col-md-3 serch-box">
                <div className="container-fluid marginform">
                  <form className="d-flex">
                    <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} className="form-control" style={{ backgroundColor: "#EAEAEA" }} placeholder="Search by Product Code" aria-label="Username" />
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
              </div>
              <div className="col-md-3 drop2">
                <div className="dropdown">
                  <Link className="btn  dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Filter By Payment Status
                  </Link>

                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                  </ul>
                </div>
              </div> */}
              {/* <div className="col-md-3 drop3">
                <div className="dropdown">
                  <Link className="btn  dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Filter by Delivery Status
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
                <th scope="col">Order Code</th>
                <th scope="col">Product Code</th>
                <th scope="col">Customer ID</th>
                <th scope="col">Amount</th>
                <th scope="col">Delivery</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {
                search ?
                  Orders.map((ord, index) => {
                    let address = ord.items[0].address;
                    let id = ord._id;
                    let s = search.toLowerCase();
                    if (id.includes(s)) {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{ord._id}</td>
                          <td>
                            {
                              ord.items.map((o, index) => {
                                return <>
                                  <p key={index}><a style={{ color: 'blue', textDecoration: 'underline', fontSize: '14px' }}>{o.products.productid} </a>Quantity : {o.products.quantity}</p>
                                </>
                              })
                            }
                          </td>
                          <td>{ord.items[0].userid}</td>
                          <td>{ord.items[0].price}</td>
                          <td>{address.pincode} <br /> {address.location} <br />{address.city}</td>
                          <td>
                            <span>{ord.items[0].status}</span> <br />
                            {/* <button className='btn btn-sm btn-danger' style={{ margin: '5px' }} onClick={() => UpdateOrder(ord._id, "cancelled")}>Cancel</button> */}
                            <button className='btn btn-sm btn-info' style={{ margin: '5px' }} onClick={() => UpdateOrder(ord._id, "packed")}>Packed</button>
                            <button className='btn btn-sm btn-warning' style={{ margin: '5px' }} onClick={() => UpdateOrder(ord._id, "shipped")}>Shipped</button>
                            <button className='btn btn-sm btn-success' style={{ margin: '5px' }} onClick={() => UpdateOrder(ord._id, "delivered")}>Delivered</button>
                          </td>
                        </tr>
                      )
                    }
                  })
                  :
                  Orders.map((ord, index) => {
                    let address = ord.items[0].address;
                    if (index >= indexOfFirst && index < indexOfLast) {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{ord._id}</td>
                          <td>
                            {
                              ord.items.map((o, index) => {

                                return <>
                                  <p key={index}><a style={{ color: 'blue', textDecoration: 'underline', fontSize: '14px' }}>{o.products.productid} </a>Quantity : {o.products.quantity}</p>
                                </>
                              })
                            }
                          </td>
                          <td>{ord.items[0].userid}</td>
                          <td>{ord.items[0].price}</td>
                          <td>{address.pincode} <br /> {address.location} <br />{address.city}</td>
                          <td>
                            <span>{ord.items[0].status}</span> <br />
                            {/* <button className='btn btn-sm btn-danger' style={{ margin: '5px' }} onClick={() => UpdateOrder(ord._id, "cancelled")}>Cancel</button> */}
                            <button className='btn btn-sm btn-info' style={{ margin: '5px' }} onClick={() => UpdateOrder(ord._id, "packed")}>Packed</button>
                            <button className='btn btn-sm btn-warning' style={{ margin: '5px' }} onClick={() => UpdateOrder(ord._id, "shipped")}>Shipped</button>
                            <button className='btn btn-sm btn-success' style={{ margin: '5px' }} onClick={() => UpdateOrder(ord._id, "delivered")}>Delivered</button>
                          </td>
                        </tr>
                      )
                    }
                  })
              }

            </tbody>
          </table>

        </div>
      </div>


      <Pagination currentproducts={Orders.length / perPage} currentpage={currentpage} setcurrentpage={setcurrentpage} />

    </div>



  )
}

export default NewOrder