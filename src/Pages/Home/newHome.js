import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Context from '../../context/Context';
import { AllBlgos } from '../../urls';
import './newhome.css'
const Home = () => {
  const navigate = useNavigate();
  const [pending, setpending] = useState([]);

  const { users, products, orders, blogs } = useContext(Context);
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-around " id="orderdetail">
          <div className="col-md-4 mb-4">
            <div className="row justify-content-around">
              <div className="col-md-5 col-11">
                <div className="row text-center">
                  <div className="col-md-12 bg-main mb-2">
                    <p>Pending Buy Orders <br /><span>77</span> <br /> <Link to="/index.html" text="view All" className="" /></p>
                  </div>
                  <div className="col-md-12 bg-main">
                    <p>Pending Sell Orders <br /><span>54</span>  <br /> <Link to="/index.html" text="view All" className="" /></p>
                  </div>

                </div>
              </div>
              <div className="col-md-5 text-center priceq bg-main w-90">
                <p> Price Enquiries<br /><span>77</span> </p>
                <button text="" type="button" className="btn w-100" />
                <button text="" type="button" className="btn w-100" />
                <button text="" type="button" className="btn w-100" />
                <button text="" type="button" className="btn w-100" />
                <Link to="/index.html" text="view All" className="" />
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
            <div className="col-md-11 bg-main text-center mb-2 p-1"> <p>Order Under Delivey <br /><span>12</span> <br />
              <Link to="" text="View All" /></p></div>
            <div className="col-md-11 bg-main text-center mb-2 p-2"> <p>Total Orders in Cart<br /><span>12</span> <br /></p></div>
          </div>

        </div>
        <div className="linebreak"></div>
        <div>

          <h3 className="pt-3 pb-3 text-center" style={{ color: "#24A1FD", fontSize: "40px" }}>ANALYTICS</h3>
          <div className="linebreak"></div>

          <div className="box-4">
            <div className="row down justify-content-around pb-1 pt-5">
              <div className="col-md-3 text-center col-11">
                <div className="col-md-12 bg-main ">
                  <p>Total No of <br /> Customers <br /><span>{users.length}</span> <br />
                    <Link to="/index.html" text="view Details" className="" /></p>
                </div>
              </div>
              <div className="col-md-3 text-center col-11"><div className="col-md-12 bg-main "> <p>Total No of Orders<br />Bought<br /><span>65</span> <br />
              </p></div></div>
              <div className="col-md-3 text-center col-11"><div className="col-md-12 bg-main "> <p>Total No of Orders<br />Sold<br /><span>23</span> <br />
              </p></div></div>
              <div className="col-md-3 text-center col-11"><div className="col-md-12 bg-main "> <p>Total No of<br />Products (live) <br /><span>{products.length}</span> <br />
              </p></div></div>
            </div>
          </div>

        </div>
        <div className="blank"></div>
      </div>
    </>
  );
};
export default Home;
