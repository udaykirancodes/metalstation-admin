import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {
    let location = useLocation();

    return (
        <div >
            <nav className="navbar navbar-dark bg-dark fixed-top mb-2">
                <div className="container-fluid text-white">
                    <div className='d-flex cursor-pointer'>
                        <i className="fa-solid fa-user mx-2 my-auto"></i>
                        <div className='mx-2 admin'>
                            <p className='small my-0' style={{ fontSize: '14px' }} href="/">Admin</p>
                            <p className='small text-muted my-0' style={{ fontSize: '12px' }}>Admin Name</p>
                        </div>
                        <div className='d-flex mx-4 my-auto website' style={{ border: '1px solid grey', borderRadius: '4px' }} role="button">
                            <i className="fa-brands fa-chrome my-auto mx-1" style={{ fontSize: '14px' }}></i>
                            <a className='my-auto mx-1 navbar-brand' style={{ fontSize: '14px' }} href='https://frontendhtml.netlify.app/index.html' target='_blank'>Visit Website</a>
                        </div>
                        <div className='nav-item dropdown d-flex mx-2 my-auto' style={{ border: '1px solid grey', borderRadius: '4px' }} role="button">
                            <i className="fa-solid fa-plus my-auto mx-1" style={{ fontSize: '14px' }}></i>
                            <a className='nav-link dropdown-toggle my-auto navbar-brand' id="offcanvasNavbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '14px' }}>Add New</a>
                            <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                <li><Link className="dropdown-item" to="newProduct">Add New Product</Link></li>
                            </ul>
                        </div>

                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end bg-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel ">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Admin</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item my-3">
                                    <i className="fa-solid fa-chart-line my-auto mx-2 d-inline"></i>
                                    <Link className={`nav-link ${location.pathname === '/' ? "active" : ""} my-auto d-inline`} aria-current="page" to="/" >Dashboard</Link>
                                </li>
                                <li className="nav-item my-3">
                                    <i className="fa-solid fa-circle-question my-auto mx-2 d-inline"></i>
                                    <Link className={`nav-link ${location.pathname === '/enquire' ? "active" : ""} my-auto d-inline`} aria-current="page" to="/enquiry" >Enquiry</Link>
                                </li>
                                <li className="nav-item my-3">
                                    <i className="fa-solid fa-list my-auto mx-2 d-inline"></i>
                                    <Link className={`nav-link ${location.pathname === '/order' ? "active" : ""} my-auto d-inline`} to="/order" >Order</Link>
                                </li>
                                <li className="nav-item dropdown my-3">
                                    <i className="fa-solid fa-cart-flatbed my-auto mx-2 d-inline"></i>
                                    <a className="nav-link dropdown-toggle my-auto d-inline " href="/" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Product
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                        <li><Link className="dropdown-item" to="/product" >Products</Link></li>
                                        <li><Link className="dropdown-item" to="/sell" >Sell</Link></li>
                                        <li><Link className="dropdown-item" to="/scrap" >Scrap</Link></li>
                                        <li><Link className="dropdown-item" to="/brand" >Brand</Link></li>
                                        <li><Link className="dropdown-item" to="/review" >Review</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item my-3">
                                    <i className="fa-solid fa-people-group my-auto mx-2 d-inline"></i>
                                    <Link className={`nav-link ${location.pathname === '/customer' ? "active" : ""} my-auto d-inline`} to="/customer" >Customers</Link>
                                </li>
                                <li className="nav-item dropdown my-3">
                                    <i className="fa-solid fa-bullhorn my-auto mx-2 d-inline"></i>
                                    <a className="nav-link dropdown-toggle my-auto d-inline" href="/" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Marketing
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">

                                        <li><Link className="dropdown-item" to="/newsletter" >Newsletters</Link></li>
                                        <li><Link className="dropdown-item" to="/subscriber" >Subscribers</Link></li>
                                        <li><Link className="dropdown-item" to="/blog" >Blog</Link></li>
                                        <li><Link className="dropdown-item" to="/addblog" reloadDocument>Publish Blog</Link></li>
                                    </ul>

                                </li>
                                <li className="nav-item dropdown my-3">
                                    <i className="fa-solid fa-trash-arrow-up my-auto mx-2 d-inline"></i>
                                    <a className="nav-link dropdown-toggle my-auto d-inline" href="/" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Trash
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">

                                        <li><Link className="dropdown-item" to="/trashproduct" >Trash Product</Link></li>
                                        <li><Link className="dropdown-item" to="/trashblog" >Trash Blog</Link></li>
                                    </ul>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
