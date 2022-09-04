import React from 'react'
import { Link } from 'react-router-dom'
import './message.css'
const message = () => {
  return (
    <div>
      <div className="container-fluid msgpage">
        <div className="container-fluid navdown mb-4 mt-4">
          <div className="row mt-3">
            <div className="col-md-3 serch-box">
              <div className="container-fluid marginform">
                <form className="d-flex">
                  <input type="text" className="form-control" style={{ backgroundColor: "#EAEAEA", "color": "#828282" }} placeholder="Search" aria-label="Username" />
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
                  Filter By Unread
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


        <div className="container-fluid">
          <div className="row message">
            <div className="msgbox">
              <div className="row text-center">
                <div className="col-md-2">
                  <button className="btn" type="button">lorem ipsum</button>
                </div>
                <div className="col-md-6">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem est laudantium doloribus voluptatum aperiam doloremque ut culpa aut nequ</p>
                </div>
                <div className="col-md-2">
                  <p>10/02/2004</p>
                </div>
                <div className="col-md-2">
                  <p>04:44 PM</p>
                </div>
              </div>
            </div>

            <div className="msgbox">
              <div className="row text-center">
                <div className="col-md-2">
                  <button className="btn" type="button">lorem ipsum</button>
                </div>
                <div className="col-md-6">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem est laudantium doloribus voluptatum aperiam doloremque ut culpa aut nequ</p>
                </div>
                <div className="col-md-2">
                  <p>10/02/2004</p>
                </div>
                <div className="col-md-2">
                  <p>04:44 PM</p>
                </div>
              </div>
            </div>

            <div className="msgbox">
              <div className="row text-center">
                <div className="col-md-2">
                  <button className="btn" type="button">lorem ipsum</button>
                </div>
                <div className="col-md-6">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem est laudantium doloribus voluptatum aperiam doloremque ut culpa aut nequ</p>
                </div>
                <div className="col-md-2">
                  <p>10/02/2004</p>
                </div>
                <div className="col-md-2">
                  <p>04:44 PM</p>
                </div>
              </div>
            </div>


            <div className="msgbox">
              <div className="row text-center">
                <div className="col-md-2">
                  <button className="btn" type="button">lorem ipsum</button>
                </div>
                <div className="col-md-6">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem est laudantium doloribus voluptatum aperiam doloremque ut culpa aut nequ</p>
                </div>
                <div className="col-md-2">
                  <p>10/02/2004</p>
                </div>
                <div className="col-md-2">
                  <p>04:44 PM</p>
                </div>
              </div>
            </div>


            <div className="msgbox">
              <div className="row text-center">
                <div className="col-md-2">
                  <button className="btn" type="button">lorem ipsum</button>
                </div>
                <div className="col-md-6">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem est laudantium doloribus voluptatum aperiam doloremque ut culpa aut nequ</p>
                </div>
                <div className="col-md-2">
                  <p>10/02/2004</p>
                </div>
                <div className="col-md-2">
                  <p>04:44 PM</p>
                </div>
              </div>
            </div>


            <div className="msgbox">
              <div className="row text-center">
                <div className="col-md-2">
                  <button className="btn" type="button">lorem ipsum</button>
                </div>
                <div className="col-md-6">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem est laudantium doloribus voluptatum aperiam doloremque ut culpa aut nequ</p>
                </div>
                <div className="col-md-2">
                  <p>10/02/2004</p>
                </div>
                <div className="col-md-2">
                  <p>04:44 PM</p>
                </div>
              </div>
            </div>

          </div>


        </div>



      </div>

      <nav aria-label="Page navigation example " className="" >
        <ul className="pagination justify-content-center mt-4">

          <li className="page-item"><Link className="page-link text-light " to="#" style={{ backgroundColor: "#24A1FD" }}>&lt;&lt;</Link></li>

          <li className="page-item "><Link className="page-link text-light" to="#" style={{ backgroundColor: "#35C0ED" }} >&lt;</Link></li>
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
          <li className="page-item"><Link className="page-link text-light" to="#" style={{ backgroundColor: "#35C0ED" }} > &gt; </Link></li>
          <li className="page-item"><Link className="page-link text-light" to="#" style={{ backgroundColor: "#24A1FD" }}> &gt;&gt;</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default message