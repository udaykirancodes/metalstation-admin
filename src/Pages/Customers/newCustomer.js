import React from 'react'
import {Link} from 'react-router-dom'
import './newCustomer.css'
const newCustomer = () => {
  return (
    <div>
   <div class="container-fluid customerpage">
                    <div class="container-fluid navdown mb-4 mt-4">
                      <div class="row mt-3">
                          <div class="col-md-3 serch-box marginform">
                              <div class="container-fluid">
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
                              Filter By Active Transactions
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
                            <th scope="col">Customer Code</th>
                            <th scope="col">Joined Date</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Profile</th>
                            <th scope="col">Wishlist</th>
                            <th scope="col">Sell Cart</th>
                            <th scope="col">Buy Cart</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>10874</td>
                            <td>09/12/22</td>
                            <td>Lorem ispusm</td>
                            <td><Link class="view" to="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">View
                        
                              
                             
                              <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                  <div class="modal-content">
                                    <div class="modal-body">

                                      
                                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                      
                                      <div class="row user text-center">
                                        <div class="col-12">
                                            <i class="bi bi-person-circle"></i>
                                        </div>
                                        <div class="col-12">
                                            <h4>Lorem, ipsum.</h4>
                                        </div>
                                        <div class="col-12">
                                            <h6>Profile</h6>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="modal-body">
                                      <p><b>Billing Address:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</p>

                                       <p><b>Address:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</p>
                                    </div>
                                    
                                  </div>
                                </div>
                              </div></Link></td>
                            

                            

                         
                            <td><Link class="view" to="#" data-bs-toggle="modal" data-bs-target="#exampleModal">View
  

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">

        
        <div class="modal-body">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

            <div class="row user text-center">
                <div class="col-12">
                    <i class="bi bi-person-circle"></i>

                </div>

                <div class="col-12">
                    <h4>Lorem, ipsum.</h4>
                </div>
                <div class="col-12">
                    <h6>Wishlist</h6>
                </div>
              </div>
                <div class="row justify-content-around mb-3 user1 ">
                   
                    <div class="col-md-4 bg-box mb-1">
                        <div class="row">
                            <img src="/metal.png"class="img-fluid" alt=""/>
                        </div>
                        <div class="row">
                            <div class="col-12 mt-2">
                                <h5>Aluminium Scrap</h5>
                                <p><b>1 ton</b>  (Min Order)</p>
                                <span>&#x20b9;1,39,999</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 bg-box mb-1"> <div class="row">
                        <img src="/metal.png"class="img-fluid" alt=""/>
                    </div>
                    <div class="row">
                        <div class="col-12 mt-2">
                            <h5>Aluminium Scrap</h5>
                            <p><b>1 ton</b>  (Min Order)</p>
                            <span>&#x20b9;1,39,999</span>
                        </div>
                    </div>
                </div>
                    <div class="col-md-4 bg-box mb-1"> <div class="row">
                        <img src="/metal.png"class="img-fluid" alt=""/>
                    </div>
                    <div class="row">
                        <div class="col-12 mt-2">
                            <h5>Aluminium Scrap</h5>
                            <p><b>1 ton</b>  (Min Order)</p>
                            <span>&#x20b9;1,39,999</span>
                        </div>
                    </div>
                </div>
                </div>
                <div class="row justify-content-around mb-3 user1">
                   
                    <div class="col-md-4 bg-box mb-1">
                        <div class="row">
                            <img src="/metal.png"class="img-fluid" alt=""/>
                        </div>
                        <div class="row">
                            <div class="col-12 mt-2">
                                <h5>Aluminium Scrap</h5>
                                <p><b>1 ton</b>  (Min Order)</p>
                                <span>&#x20b9;1,39,999</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 bg-box mb-1"> <div class="row">
                        <img src="/metal.png"class="img-fluid" alt=""/>
                    </div>
                    <div class="row">
                        <div class="col-12 mt-2">
                            <h5>Aluminium Scrap</h5>
                            <p><b>1 ton</b>  (Min Order)</p>
                            <span>&#x20b9;1,39,999</span>
                        </div>
                    </div>
                </div>
                    <div class="col-md-4 bg-box mb-1"> <div class="row">
                        <img src="/metal.png"class="img-fluid" alt=""/>
                    </div>
                    <div class="row">
                        <div class="col-12 mt-2">
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
                           
                            <td><Link class="view" to="#" data-bs-toggle="modal" data-bs-target="#exampleModal2">View
  
                             
                              <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-scrollable">
                                  <div class="modal-content">
                                    
                                    <div class="modal-body ">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                                        <div class="row user text-center">
                                            <div class="col-12">
                                                <i class="bi bi-person-circle"></i>
                                            </div>
                                            <div class="col-12">
                                                <h4>Lorem, ipsum.</h4>
                                            </div>
                                            <div class="col-12">
                                                <h6>Sell Cart</h6>
                                            </div>
                                          </div>
                                          
                                            <div class="row justify-content-around mb-3 user1 ">
                                               
                                                <div class="col-md-4 bg-box mb-1">
                                                    <div class="row">
                                                        <img src="/metal.png"class="img-fluid" alt=""/>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-12 mt-2">
                                                            <h5>Aluminium Scrap</h5>
                                                            <p><b>1 ton</b>  (Min Order)</p>
                                                            <span>&#x20b9;1,39,999</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 bg-box mb-1"> <div class="row">
                                                    <img src="/metal.png"class="img-fluid" alt=""/>
                                                </div>
                                                <div class="row">
                                                    <div class="col-12 mt-2">
                                                        <h5>Aluminium Scrap</h5>
                                                        <p><b>1 ton</b>  (Min Order)</p>
                                                        <span>&#x20b9;1,39,999</span>
                                                    </div>
                                                </div>
                                            </div>
                                                <div class="col-md-4 bg-box mb-1"> <div class="row">
                                                    <img src="/metal.png"class="img-fluid" alt=""/>
                                                </div>
                                                <div class="row">
                                                    <div class="col-12 mt-2">
                                                        <h5>Aluminium Scrap</h5>
                                                        <p><b>1 ton</b>  (Min Order)</p>
                                                        <span>&#x20b9;1,39,999</span>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div class="row justify-content-around mb-3 user1">
                                               
                                                <div class="col-md-4 bg-box mb-1">
                                                    <div class="row">
                                                        <img src="/metal.png"class="img-fluid" alt=""/>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-12 mt-2">
                                                            <h5>Aluminium Scrap</h5>
                                                            <p><b>1 ton</b>  (Min Order)</p>
                                                            <span>&#x20b9;1,39,999</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 bg-box mb-1"> <div class="row">
                                                    <img src="/metal.png"class="img-fluid" alt=""/>
                                                </div>
                                                <div class="row">
                                                    <div class="col-12 mt-2">
                                                        <h5>Aluminium Scrap</h5>
                                                        <p><b>1 ton</b>  (Min Order)</p>
                                                        <span>&#x20b9;1,39,999</span>
                                                    </div>
                                                </div>
                                            </div>
                                                <div class="col-md-4 bg-box mb-1"> <div class="row">
                                                    <img src="/metal.png"class="img-fluid" alt=""/>
                                                </div>
                                                <div class="row">
                                                    <div class="col-12 mt-2">
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

                                                    
                             <td><Link class="view" to="#" data-bs-toggle="modal" data-bs-target="#exampleModal3">View
  

  <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        
        <div class="modal-body ">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

            <div class="row user text-center">
                <div class="col-12">
                    <i class="bi bi-person-circle"></i>
                </div>
                <div class="col-12">
                    <h4>Lorem, ipsum.</h4>
                </div>
                <div class="col-12">
                    <h6>Buy Cart</h6>
                </div>
              </div>
             
                <div class="row justify-content-around mb-3 user1 ">
                  
                    <div class="col-md-4 bg-box mb-1">
                        <div class="row">
                            <img src="/metal.png"class="img-fluid" alt=""/>
                        </div>
                        <div class="row">
                            <div class="col-12 mt-2">
                                <h5>Aluminium Scrap</h5>
                                <p><b>1 ton</b>  (Min Order)</p>
                                <span>&#x20b9;1,39,999</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 bg-box mb-1"> <div class="row">
                        <img src="/metal.png"class="img-fluid" alt=""/>
                    </div>
                    <div class="row">
                        <div class="col-12 mt-2">
                            <h5>Aluminium Scrap</h5>
                            <p><b>1 ton</b>  (Min Order)</p>
                            <span>&#x20b9;1,39,999</span>
                        </div>
                    </div>
                </div>
                    <div class="col-md-4 bg-box mb-1"> <div class="row">
                        <img src="/metal.png"class="img-fluid" alt=""/>
                    </div>
                    <div class="row">
                        <div class="col-12 mt-2">
                            <h5>Aluminium Scrap</h5>
                            <p><b>1 ton</b>  (Min Order)</p>
                            <span>&#x20b9;1,39,999</span>
                        </div>
                    </div>
                </div>
                </div>
                <div class="row justify-content-around mb-3 user1">
                  
                    <div class="col-md-4 bg-box mb-1">
                        <div class="row">
                            <img src="/metal.png"class="img-fluid" alt=""/>
                        </div>
                        <div class="row">
                            <div class="col-12 mt-2">
                                <h5>Aluminium Scrap</h5>
                                <p><b>1 ton</b>  (Min Order)</p>
                                <span>&#x20b9;1,39,999</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 bg-box mb-1"> <div class="row">
                        <img src="/metal.png"class="img-fluid" alt=""/>
                    </div>
                    <div class="row">
                        <div class="col-12 mt-2">
                            <h5>Aluminium Scrap</h5>
                            <p><b>1 ton</b>  (Min Order)</p>
                            <span>&#x20b9;1,39,999</span>
                        </div>
                    </div>
                </div>
                    <div class="col-md-4 bg-box mb-1"> <div class="row">
                        <img src="/metal.png"class="img-fluid" alt=""/>
                    </div>
                    <div class="row">
                        <div class="col-12 mt-2">
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
    </div></Link></td>


                            
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>10874</td>
                            <td>09/12/22</td>
                            <td>Lorem ispusm</td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>10874</td>
                            <td>09/12/22</td>
                            <td>Lorem ispusm</td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>10874</td>
                            <td>09/12/22</td>
                            <td>Lorem ispusm</td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>10874</td>
                            <td>09/12/22</td>
                            <td>Lorem ispusm</td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>10874</td>
                            <td>09/12/22</td>
                            <td>Lorem ispusm</td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>10874</td>
                            <td>09/12/22</td>
                            <td>Lorem ispusm</td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>10874</td>
                            <td>09/12/22</td>
                            <td>Lorem ispusm</td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>10874</td>
                            <td>09/12/22</td>
                            <td>Lorem ispusm</td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>10874</td>
                            <td>09/12/22</td>
                            <td>Lorem ispusm</td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>10874</td>
                            <td>09/12/22</td>
                            <td>Lorem ispusm</td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>10874</td>
                            <td>09/12/22</td>
                            <td>Lorem ispusm</td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>10874</td>
                            <td>09/12/22</td>
                            <td>Lorem ispusm</td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                            <td><Link class="view" to="#">View</Link></td>
                          </tr>
                          
                          

                        </tbody>
                      </table>

                      
                      
                        
                      
        </div>

    </div>
  )
}

export default newCustomer