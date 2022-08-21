import React from "react";
import {Link} from 'react-router-dom'

import './newhome.css'
const Home = () => {
  return (
    <>
    <div class="container-fluid">
     
       
        <div className="row justify-content-around " id="orderdetail">
    <div className="col-md-4 mb-4">
        <div className="row justify-content-around">
          <div className="col-md-5 col-11">
           <div className="row text-center">
            <div className="col-md-12 bg-main mb-2"> 
            <p>Pending Buy Orders <br/><span>77</span> <br/> <Link to ="/index.html" text="view All" className="" /></p>
            </div>
            <div className="col-md-12 bg-main">
             <p>Pending Sell Orders <br/><span>54</span>  <br/> <Link to ="/index.html" text="view All" className="" /></p>
             </div>
           
          </div>
          </div>
          <div className="col-md-5 text-center priceq bg-main w-90">
            <p> Price Enquiries<br/><span>77</span> </p>
            <button text="" type="button" className="btn w-100" />
            <button text="" type="button" className="btn w-100" />
            <button text="" type="button" className="btn w-100" />
            <button text="" type="button" className="btn w-100" />
            <Link to ="/index.html" text="view All" className="" />
          </div>
        </div>
    </div>
    <div className="col-md-4 mb-4 text-center bg-main message col-11">
        <p>Unread Message</p>
        <button text="" type="button" className="btn w-100" />
            <button text="" type="button" className="btn w-100" />
            <button text="" type="button" className="btn w-100" />
            <Link to="./mess.html" text="view All" className="" />
    </div>
    <div className="col-md-4 col-11">
        <div className="col-md-11 bg-main text-center mb-2 p-1"> <p>Order Under Delivey <br/><span>12</span> <br/>
        <Link to="" text="View All" /></p></div>
        <div className="col-md-11 bg-main text-center mb-2 p-2"> <p>Total Orders in Cart<br/><span>12</span> <br/></p></div>    
    </div>
 
  </div>
          <div class="linebreak"></div>
          <div>
    
    <h3 className="pt-3 pb-3 text-center" style={{"color": "#24A1FD" , "font-size": "40px"}}>ANALYTICS</h3>
    <div className="linebreak"></div>

      <div className="box-4">
      <div className="row down justify-content-around pb-1 pt-5">
        <div className="col-md-3 text-center col-11">
        <div className="col-md-12 bg-main "> 
        <p>Total No of <br/> Customers <br/><span>277</span> <br/>
        <Link to="/index.html" text="view Details" className="" /></p>
        </div>
        </div>
        <div className="col-md-3 text-center col-11"><div className="col-md-12 bg-main "> <p>Total No of Orders<br/>Bought<br/><span>65</span> <br/> 
        <Link to="/index.html" text="view Details" className="" /></p></div></div>
        <div className="col-md-3 text-center col-11"><div className="col-md-12 bg-main "> <p>Total No of Orders<br/>Sold<br/><span>23</span> <br/>
         <Link to="/index.html" text="view Details" className="" /></p></div></div>
        <div className="col-md-3 text-center col-11"><div className="col-md-12 bg-main "> <p>Total No of<br/>Products (live) <br/><span>104</span> <br/> 
        <Link to="/index.html" text="view Details" className="" /></p></div></div>
       </div>
      </div>
      
     </div>
          <div className="blank"></div>
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

   </>
  );
};
export default Home;
