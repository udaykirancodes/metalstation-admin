import React from 'react'
import {Link} from 'react-router-dom'
import Pagination from '../../components/Pagination'
import './neworder.css'
const newOrder = () => {
  return (
    <div>
  <div className="container-fluid orderpage" >
                  <div className="container-fluid" >
                    <div className="container-fluid navdown mb-4 mt-4">
                      <div className="row mt-3">
                          <div className="col-md-3 serch-box">
                              <div className="container-fluid marginform">
                                <form className="d-flex">
                                  <input type="text" className="form-control" style={{"background-color":"#EAEAEA"}} placeholder="Search by Product Code" aria-label="Username" />
                                </form>
                              </div>
                            
                          </div>
                          
                          <div className="col-md-3 drop1">
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
                          </div>
                          
                          </div>
                          </div>
                    
                 
                    <table className="table">
                        
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Order Code</th>
                            <th scope="col">Product Code</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Delivery</th>
                            <th scope="col">Payment Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>10874</td>
                            <td>008</td>
                            <td>Lorem ispusm</td>
                            <td>18,000</td>
                            <td>Not Yet Dispatched</td>
                            <td>Recieved</td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>10874</td>
                            <td>008</td>
                            <td>Lorem ispusm</td>
                            <td>18,000</td>
                            <td>Not Yet Dispatched</td>
                            <td>Recieved</td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>10874</td>
                            <td>008</td>
                            <td>Lorem ispusm</td>
                            <td>18,000</td>
                            <td>Not Yet Dispatched</td>
                            <td>Recieved</td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>10874</td>
                            <td>008</td>
                            <td>Lorem ispusm</td>
                            <td>18,000</td>
                            <td>Not Yet Dispatched</td>
                            <td>Recieved</td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>10874</td>
                            <td>008</td>
                            <td>Lorem ispusm</td>
                            <td>18,000</td>
                            <td>Not Yet Dispatched</td>
                            <td>Recieved</td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>10874</td>
                            <td>008</td>
                            <td>Lorem ispusm</td>
                            <td>18,000</td>
                            <td>Not Yet Dispatched</td>
                            <td>Recieved</td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>10874</td>
                            <td>008</td>
                            <td>Lorem ispusm</td>
                            <td>18,000</td>
                            <td>Not Yet Dispatched</td>
                            <td>Recieved</td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>10874</td>
                            <td>008</td>
                            <td>Lorem ispusm</td>
                            <td>18,000</td>
                            <td>Not Yet Dispatched</td>
                            <td>Recieved</td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>10874</td>
                            <td>008</td>
                            <td>Lorem ispusm</td>
                            <td>18,000</td>
                            <td>Not Yet Dispatched</td>
                            <td>Recieved</td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>10874</td>
                            <td>008</td>
                            <td>Lorem ispusm</td>
                            <td>18,000</td>
                            <td>Not Yet Dispatched</td>
                            <td>Recieved</td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>10874</td>
                            <td>008</td>
                            <td>Lorem ispusm</td>
                            <td>18,000</td>
                            <td>Not Yet Dispatched</td>
                            <td>Recieved</td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>10874</td>
                            <td>008</td>
                            <td>Lorem ispusm</td>
                            <td>18,000</td>
                            <td>Not Yet Dispatched</td>
                            <td>Recieved</td>
                          </tr>
                        </tbody>
                      </table>

        </div>
        </div>


<Pagination/>

        </div>


    
  )
}

export default newOrder