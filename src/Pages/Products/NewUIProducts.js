/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useState} from 'react'
import './newuiproducts.css'
import {Link} from 'react-router-dom'
const NewUIProducts = () => {

    const [arrowUp, setArrowUp] = useState(false);
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


          <div class="container-fluid navdown mb-4 mt-4">
                      <div class="row mt-3 m-5 contain">
                          <div class="col-md-3 serch-box">
                              <div class="container-fluid">
                                <form class="d-flex">
                                  <input type="text" class="form-control" style={{"background-color":"#EAEAEA"}} placeholder="Search by Product Code" aria-label="Username"/>
                                </form>
                              </div>
                            
                          </div>
                          <div class="col-md-3 ">
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
                          </div>
                          </div>

<div className="cards">
        <div className="card">
          <div className="card__image-container">
            <img
              src="/metal.png"
              alt="image description "
            />
          </div>
          <div className="card__content">
            <h4 className="card__title">
              Aluminium Scrap
            </h4>
              <p ><b>1 Ton </b><small> (Min. Order)</small></p>
              <h4 className="card__price">₹1,39,999</h4>
          </div>
        </div>
        <div className="card">
          <div className="card__image-container">
            <img
              src="/metal.png"
              alt="image description "
            />
          </div>
          <div className="card__content">
            <h4 className="card__title">
              Aluminium Scrap
            </h4>
              <p ><b>1 Ton </b><small> (Min. Order)</small></p>
              <h4 className="card__price">₹1,39,999</h4>
          </div>
        </div>
        <div className="card">
          <div className="card__image-container">
            <img
              src="/metal.png"
              alt="image description "
            />
          </div>
          <div className="card__content">
            <h4 className="card__title">
              Aluminium Scrap
            </h4>
              <p ><b>1 Ton </b><small> (Min. Order)</small></p>
              <h4 className="card__price">₹1,39,999</h4>
          </div>
        </div>
        <div className="card">
          <div className="card__image-container">
            <img
              src="/metal.png"
              alt="image description "
            />
          </div>
          <div className="card__content">
            <h4 className="card__title">
              Aluminium Scrap
            </h4>
              <p ><b>1 Ton </b><small> (Min. Order)</small></p>
              <h4 className="card__price">₹1,39,999</h4>
          </div>
        </div>
        <div className="card">
          <div className="card__image-container">
            <img
              src="/metal.png"
              alt="image description "
            />
          </div>
          <div className="card__content">
            <h4 className="card__title">
              Aluminium Scrap
            </h4>
              <p ><b>1 Ton </b><small> (Min. Order)</small></p>
              <h4 className="card__price">₹1,39,999</h4>
          </div>
        </div>
        <div className="card">
          <div className="card__image-container">
            <img
              src="/metal.png"
              alt="image description "
            />
          </div>
          <div className="card__content">
            <h4 className="card__title">
              Aluminium Scrap
            </h4>
              <p ><b>1 Ton </b><small> (Min. Order)</small></p>
              <h4 className="card__price">₹1,39,999</h4>
          </div>
        </div>
        <div className="card">
          <div className="card__image-container">
            <img
              src="/metal.png"
              alt="image description "
            />
          </div>
          <div className="card__content">
            <h4 className="card__title">
              Aluminium Scrap
            </h4>
              <p ><b>1 Ton </b><small> (Min. Order)</small></p>
              <h4 className="card__price">₹1,39,999</h4>
          </div>
        </div>
        <div className="card">
          <div className="card__image-container">
            <img
              src="/metal.png"
              alt="image description "
            />
          </div>
          <div className="card__content">
            <h4 className="card__title">
              Aluminium Scrap
            </h4>
              <p ><b>1 Ton </b><small> (Min. Order)</small></p>
              <h4 className="card__price">₹1,39,999</h4>
          </div>
        </div>
        <div className="card">
          <div className="card__image-container">
            <img
              src="/metal.png"
              alt="image description "
            />
          </div>
          <div className="card__content">
            <h4 className="card__title">
              Aluminium Scrap
            </h4>
              <p ><b>1 Ton </b><small> (Min. Order)</small></p>
              <h4 className="card__price">₹1,39,999</h4>
          </div>
        </div>
        <div className="card">
          <div className="card__image-container">
            <img
              src="/metal.png"
              alt="image description "
            />
          </div>
          <div className="card__content">
            <h4 className="card__title">
              Aluminium Scrap
            </h4>
              <p ><b>1 Ton </b><small> (Min. Order)</small></p>
              <h4 className="card__price">₹1,39,999</h4>
          </div>
        </div>
        <div className="card">
          <div className="card__image-container">
            <img
              src="/metal.png"
              alt="image description "
            />
          </div>
          <div className="card__content">
            <h4 className="card__title">
              Aluminium Scrap
            </h4>
              <p ><b>1 Ton </b><small> (Min. Order)</small></p>
              <h4 className="card__price">₹1,39,999</h4>
          </div>
        </div>
        <div className="card">
          <div className="card__image-container">
            <img
              src="/metal.png"
              alt="image description "
            />
          </div>
          <div className="card__content">
            <h4 className="card__title">
              Aluminium Scrap
            </h4>
              <p ><b>1 Ton </b><small> (Min. Order)</small></p>
              <h4 className="card__price">₹1,39,999</h4>
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

export default NewUIProducts