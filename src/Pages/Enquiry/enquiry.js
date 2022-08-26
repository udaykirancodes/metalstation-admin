import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './enquiry.css';
import { GetEnquiries, UpdateEnquiry } from "../../urls";
import Pagination from "../../components/Pagination";


const Enquiry = () => {
  const navigate = useNavigate();
  const [Enquiry, setEnquiry] = useState([])
  const [search, setSearch] = useState('');

  const fetchdata = async () => {
    let adminToken = localStorage.getItem('adminToken');
    if (!adminToken) {
      navigate('/login')
      return;
    }
    // fetch the data 
    let res = await fetch(GetEnquiries, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'adminToken': adminToken
      }
    })
    let data = await res.json();
    if (data.success) {
      setEnquiry(data.data); // 
    }
    else {
      navigate('/login');
    }
  }
  useEffect(() => {
    fetchdata();
  }, [])

  const getdate = (data) => {
    let date = new Date(data);
    return date.toDateString();
  }
  const [price, setprice] = useState(0);

  // add price to enquiry 
  const AddPrice = async (id) => {
    // 
    let adminToken = localStorage.getItem('adminToken');
    if (!adminToken) {
      navigate('/login')
      return;
    }
    if (!price) {
      return
    }
    // fetch the data 
    let res = await fetch(UpdateEnquiry, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'adminToken': adminToken
      },
      body: JSON.stringify({
        id: id,
        status: "confirmed",
        price: price
      })
    })
    let data = await res.json();
    if (data.success) {

      // Update in frontend 
      let enq = Enquiry.map((e) => {
        if (e._id === id) {
          e.status = "confirmed"
          e.price = price
        }
        return e;
      })
      setEnquiry(enq);
    }
  }
  return (
    <div>
      <div className="container-fluid enquirypage">
        <div className="container-fluid">
          <div className="container-fluid navdown mb-4 mt-4">
            <div className="row mt-3">
              <div className="col-md-3 serch-box">
                <div className="container-fluid marginform">
                  <form className="d-flex">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="form-control" style={{ backgroundColor: "#EAEAEA" }} placeholder="Search by Enquiry Code" aria-label="Username" />
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
                <th scope="col">Customer</th>
                <th scope="col">Date of Enquiry</th>
                <th scope="col">Status</th>
                <th scope="col">Send Final Cost</th>
              </tr>
            </thead>
            <tbody>
              {
                search ?
                  Enquiry.map((enq, index) => {
                    let s = search.toLowerCase();
                    if (enq._id.includes(s)) {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{enq._id}</td>
                          <td>{enq.productid}</td>
                          <td>{enq.name} <br /> {enq.phone}</td>
                          <td>{getdate(enq.createdAt)}</td>
                          <td>{enq.status}</td>
                          {
                            !enq.price &&
                            <>
                              <td>
                                <input type="number" placeholder='Add Price' onChange={(e) => setprice(e.target.value)} style={{ width: '100px' }}  ></input>
                                <button className='btn  btn-sm btn-success' onClick={(e) => AddPrice(enq._id)} style={{ width: '50px', marginLeft: '10px' }}> Add</button>
                              </td>
                            </>
                          }
                        </tr>
                      )
                    }
                  })
                  :
                  Enquiry.map((enq, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{enq._id}</td>
                        <td>{enq.productid}</td>
                        <td>{enq.name} <br /> {enq.phone}</td>
                        <td>{getdate(enq.createdAt)}</td>
                        <td>{enq.status}</td>
                        {
                          !enq.price &&
                          <>
                            <td>
                              <input type="number" placeholder='Add Price' onChange={(e) => setprice(e.target.value)} style={{ width: '100px' }}  ></input>
                              <button className='btn  btn-sm btn-success' onClick={(e) => AddPrice(enq._id)} style={{ width: '50px', marginLeft: '10px' }}> Add</button>
                            </td>
                          </>
                        }
                      </tr>
                    )
                  })

              }
            </tbody>
          </table>


        </div>
      </div>

      <Pagination />


      {/* <nav aria-label="Page navigation example " className="" >
        <ul className="pagination justify-content-center mt-4">

          <li className="page-item"><Link className="page-link text-light " to="#" style={{ "background-color": "#24A1FD" }}>&lt;&lt;</Link></li>

          <li className="page-item "><Link className="page-link text-light" to="#" style={{ "background-color": "#35C0ED" }} >&lt;</Link></li>
          <li className="page-item text-decoration-none text-dark"><Link className="page-link" to="#" >1</Link></li>
          <li className="page-item"><Link className="page-link" to="#" >2</Link></li>
          <li className="page-item"><Link className="page-link" to="#" >3</Link></li>
          <li className="page-item"><Link className="page-link" to="#" >4</Link></li>
          <li className="page-item"><Link className="page-link" to="#" >5</Link></li>
          <li className="page-item"><Link className="page-link" to="#" >6</Link></li>
          <li className="page-item"><Link className="page-link" to="#" >.</Link></li>
          <li className="page-item"><Link className="page-link" to="#" >.</Link></li>
          <li className="page-item"><Link className="page-link" to="#" >.</Link></li>
          <li className="page-item"><Link className="page-link" to="#" >20</Link></li>
          <li className="page-item"><Link className="page-link text-light" to="#" style={{ "background-color": "#35C0ED" }} > &gt; </Link></li>
          <li className="page-item"><Link className="page-link text-light" to="#" style={{ "background-color": "#24A1FD" }}> &gt;&gt;</Link></li>
        </ul>
      </nav> */}

    </div>
  )
}

export default Enquiry