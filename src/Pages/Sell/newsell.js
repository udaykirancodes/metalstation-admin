import React from 'react'
import { Link } from 'react-router-dom'
import './newsell.css'
import Pagination from '../../components/Pagination';
import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Context from "../../context/Context";
import { AllSellUrl, backendurl } from '../../urls';

const Newsell = ({ showAlert }) => {
  const navigate = useNavigate();

  const [search, setsearch] = useState('')

  // pagination related code 
  const [currentpage, setcurrentpage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const indexOfLast = currentpage * perPage;
  const indexOfFirst = indexOfLast - perPage;

  const [sell, setsell] = useState([])

  // get all the sells 
  const getAllSell = () => {
    let token = localStorage.getItem('adminToken');
    fetch(AllSellUrl, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'adminToken': token
      }
    })
      .then((res) => res.json())
      .then(data => {
        if (data.success) {
          setsell(data.sells);
          console.log('got sell');
        }
        else {
          console.log('error in getting sell');
        }
      })
  }
  useEffect(() => {
    let adminToken = localStorage.getItem('adminToken');
    if (!adminToken) {
      navigate('/login');
    }
    getAllSell()
    showAlert('Hey, You got these many !', 'success');
  }, [])
  return (
    <div>
      <div className="container-fluid sellpage">
        <div className="container-fluid navdown mb-4 mt-4">
          <div className="row mt-3">
            <div className="col-md-3 serch-box">
              <div className="container-fluid marginform">
                <form className="d-flex">
                  <input type="text" className="form-control" style={{ backgroundColor: "#EAEAEA" }} placeholder="Search by Name/Email" value={search} onChange={(e) => setsearch(e.target.value)} aria-label="Username" />
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
            </div>
            <div className="col-md-3 drop3">
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
              <th scope="col">Sell Code</th>
              <th scope="col">Name/Business</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">City</th>
              <th scope="col">Material</th>
              <th scope="col">category</th>
              <th scope="col">Image</th>
            </tr>
          </thead>
          <tbody>
            {
              search ?
                sell.map((element, index) => {
                  let s = search.toLowerCase();

                  if (element.business.includes(s) || element.email.includes(s)) {
                    return <tr key={index} className="first">
                      <th>{index + 1}</th>
                      <th>{element._id}</th>
                      <th>{element.business}</th>
                      <th>{element.email}</th>
                      <th>{element.phone}</th>
                      <th>{element.city}</th>
                      <th>{element.material}</th>
                      <th>{element.category}</th>
                      <th style={{ display: 'flex', flexDirection: 'column' }}>
                        {
                          element.images[0] &&
                          <>
                            <a href={backendurl + element.images[0]} target="_blank">
                              <img style={{ height: '50px', width: '100px' }} src={backendurl + element.images[0]} alt="Image" />
                            </a>
                            {
                              element.images.map((url, index) => {
                                return <a key={index} href={backendurl + url} target="_blank">View</a>
                              })
                            }
                          </>
                        }
                      </th>
                    </tr>
                  }
                })
                :
                sell.map((element, index) => {
                  if (index >= indexOfFirst && index < indexOfLast) {
                    return <tr key={index} className="first">
                      <th>{index + 1}</th>
                      <th>{element._id}</th>
                      <th>{element.business}</th>
                      <th>{element.email}</th>
                      <th>{element.phone}</th>
                      <th>{element.city}</th>
                      <th>{element.material}</th>
                      <th>{element.category}</th>
                      <th style={{ display: 'flex', flexDirection: 'column' }}>
                        {
                          element.images[0] &&
                          <>
                            <a href={backendurl + element.images[0]} target="_blank">
                              <img style={{ height: '50px', width: '100px' }} src={backendurl + element.images[0]} alt="Image" />
                            </a>
                            {
                              element.images.map((url, index) => {
                                return <a key={index} href={backendurl + url} target="_blank">View</a>
                              })
                            }
                          </>
                        }
                      </th>
                    </tr>
                  }
                })
            }
          </tbody>
        </table>
      </div>

      <Pagination currentproducts={sell.length / perPage} currentpage={currentpage} setcurrentpage={setcurrentpage} />

    </div>
  )
}

export default Newsell