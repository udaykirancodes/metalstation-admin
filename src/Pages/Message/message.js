import React from 'react'
import {Link} from 'react-router-dom'
import './message.css'
const message = () => {
  return (
    <div>
 
        
                 
                  <div class="container-fluid msgpage">
                    <div class="container-fluid navdown mb-4 mt-4">
                      <div class="row mt-3">
                          <div class="col-md-3 serch-box">
                              <div class="container-fluid marginform">
                                <form class="d-flex">
                                  <input type="text" class="form-control" style={{"background-color": "#EAEAEA", "color": "#828282"}} placeholder="Search" aria-label="Username"/>
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
                              Filter By Unread
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
                    
                  
                    <div class="container-fluid">
                        <div class="row message">
                        <div class="msgbox">
                        <div class="row text-center">
                            <div class="col-md-2">
                              <button class="btn" type="button">lorem ipsum</button>
                            </div>
                            <div class="col-md-6">
                              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem est laudantium doloribus voluptatum aperiam doloremque ut culpa aut nequ</p>
                            </div>
                            <div class="col-md-2">
                              <p>10/02/2004</p>
                            </div>
                            <div class="col-md-2">
                              <p>04:44 PM</p>
                            </div>
                          </div>
                        </div>
                 
                        <div class="msgbox">
                          <div class="row text-center">
                              <div class="col-md-2">
                                <button class="btn" type="button">lorem ipsum</button>
                              </div>
                              <div class="col-md-6">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem est laudantium doloribus voluptatum aperiam doloremque ut culpa aut nequ</p>
                              </div>
                              <div class="col-md-2">
                                <p>10/02/2004</p>
                              </div>
                              <div class="col-md-2">
                                <p>04:44 PM</p>
                              </div>
                            </div>
                          </div>
                
                          <div class="msgbox">
                            <div class="row text-center">
                                <div class="col-md-2">
                                  <button class="btn" type="button">lorem ipsum</button>
                                </div>
                                <div class="col-md-6">
                                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem est laudantium doloribus voluptatum aperiam doloremque ut culpa aut nequ</p>
                                </div>
                                <div class="col-md-2">
                                  <p>10/02/2004</p>
                                </div>
                                <div class="col-md-2">
                                  <p>04:44 PM</p>
                                </div>
                              </div>
                            </div>
                  
                           
                            <div class="msgbox">
                              <div class="row text-center">
                                  <div class="col-md-2">
                                    <button class="btn" type="button">lorem ipsum</button>
                                  </div>
                                  <div class="col-md-6">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem est laudantium doloribus voluptatum aperiam doloremque ut culpa aut nequ</p>
                                  </div>
                                  <div class="col-md-2">
                                    <p>10/02/2004</p>
                                  </div>
                                  <div class="col-md-2">
                                    <p>04:44 PM</p>
                                  </div>
                                </div>
                              </div>
                  
                             
                              <div class="msgbox">
                                <div class="row text-center">
                                    <div class="col-md-2">
                                      <button class="btn" type="button">lorem ipsum</button>
                                    </div>
                                    <div class="col-md-6">
                                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem est laudantium doloribus voluptatum aperiam doloremque ut culpa aut nequ</p>
                                    </div>
                                    <div class="col-md-2">
                                      <p>10/02/2004</p>
                                    </div>
                                    <div class="col-md-2">
                                      <p>04:44 PM</p>
                                    </div>
                                  </div>
                                </div>
                  
                                
                                <div class="msgbox">
                                  <div class="row text-center">
                                      <div class="col-md-2">
                                        <button class="btn" type="button">lorem ipsum</button>
                                      </div>
                                      <div class="col-md-6">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem est laudantium doloribus voluptatum aperiam doloremque ut culpa aut nequ</p>
                                      </div>
                                      <div class="col-md-2">
                                        <p>10/02/2004</p>
                                      </div>
                                      <div class="col-md-2">
                                        <p>04:44 PM</p>
                                      </div>
                                    </div>
                                  </div>
                                      
                        </div>
                        
                          
                          </div>
                    
                      
                      
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

export default message