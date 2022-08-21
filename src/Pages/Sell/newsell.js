import React from 'react'
import {Link} from 'react-router-dom'
import './newsell.css'
const newsell = () => {
  return (
    <div>
                  <div class="container-fluid sellpage">
                    <div class="container-fluid navdown mb-4 mt-4">
                      <div class="row mt-3">
                          <div class="col-md-3 serch-box">
                              <div class="container-fluid marginform">
                                <form class="d-flex">
                                  <input type="text" class="form-control" style={{"background-color":"#EAEAEA"}} placeholder="Search by Product Code" aria-label="Username" />
                                </form>
                              </div>                           
                          </div>
                          <div class="col-md-3 drop1">
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
                          <div class="col-md-3 drop2">
                            <div class="dropdown">
                              <Link class="btn  dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                              Filter By Payment Status
                              </Link>
                            
                              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><Link class="dropdown-item" to="#">Action</Link></li>
                                <li><Link class="dropdown-item" to="#">Another action</Link></li>
                                <li><Link class="dropdown-item" to="#">Something else here</Link></li>
                              </ul>
                            </div>
                          </div>
                          <div class="col-md-3 drop3">
                            <div class="dropdown">
                              <Link class="btn  dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                              Filter by Delivery Status
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
                    <table class="table">
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

        <nav aria-label="Page navigation example "className="" >
                    <ul class="pagination justify-content-center mt-4">
                     
                      <li className="page-item"><Link className="page-link text-light " to="#" style={{"background-color": "#24A1FD"}}>&lt;&lt;</Link></li>

                      <li className="page-item "><Link className="page-link text-light" to="#" style={{"background-color": "#35C0ED"}} >&lt;</Link></li>
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
                      <li className="page-item"><Link className="page-link text-light" to="#"style={{"background-color": "#35C0ED"}} > &gt; </Link></li>
                      <li className="page-item"><Link className="page-link text-light" to="#" style={{"background-color": "#24A1FD"}}> &gt;&gt;</Link></li>
                    </ul>
                  </nav>
    </div>
  )
}

export default newsell