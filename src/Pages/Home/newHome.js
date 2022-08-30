import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Context from '../../context/Context';
import { AllBlgos } from '../../urls';
import './newhome.css'
const Home = () => {
  const navigate = useNavigate();
  const { Orders, sell, Enquiry, users, products } = useContext(Context);

  const [pendingOrders, setPendingOrders] = useState(0);
  const [shippingOrders, setshippingOrders] = useState(0);
  const [sold, setSold] = useState(0);
  const calculate = () => {
    let p = Orders.filter((ord) => ord.items[0].status === "pending");
    setPendingOrders(p.length);
    let q = Orders.filter((ord) => ord.items[0].status === "shipped");
    setshippingOrders(q.length);
    let r = Orders.filter((ord) => ord.items[0].status === "delivered");
    setSold(r.length)
  }

  useEffect(() => {
    let token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/login')
      return;
    }
    console.log('reload');
    calculate();
  }, [Orders, Enquiry])

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-around " id="orderdetail">
          <div className="col-md-4 mb-4">
            <div className="row justify-content-around">
              <div className="col-md-5 col-11">
                <div className="row text-center">
                  <div className="col-md-12 bg-main mb-2">
                    <p>Pending Buy Orders <br /><span>{pendingOrders}</span> <br /> </p>
                  </div>
                  <div className="col-md-12 bg-main">
                    <p>Total Sell Orders <br /><span>{sell.length}</span>  <br /></p>
                  </div>

                </div>
              </div>
              <div className="col-md-5 text-center priceq bg-main w-90">
                <p> Price Enquiries<br /><span>{Enquiry.length}</span> </p>
                <button text="" type="button" className="btn w-100" />
                <button text="" type="button" className="btn w-100" />
                <button text="" type="button" className="btn w-100" />
                <button text="" type="button" className="btn w-100" />
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 text-center bg-main message col-11">
            <p>Unread Message</p>
            <button text="" type="button" className="btn w-100" />
            <button text="" type="button" className="btn w-100" />
            <button text="" type="button" className="btn w-100" />
          </div>
          <div className="col-md-4 col-11">
            <div className="col-md-11 bg-main text-center mb-2 p-1"> <p>Current Orders Shipping <br /><span>{shippingOrders}</span> <br />
            </p></div>
            <div className="col-md-11 bg-main text-center mb-2 p-2"> <p>Total Orders in Cart<br /><span>{Orders.length}</span> <br /></p></div>
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
                  </p>
                </div>
              </div>
              <div className="col-md-3 text-center col-11"><div className="col-md-12 bg-main "> <p>Total No of Orders<br />Bought<br /><span>{Orders.length}</span> <br />
              </p></div></div>
              <div className="col-md-3 text-center col-11"><div className="col-md-12 bg-main "> <p>Total No of Orders<br />Sold<br /><span>{sold}</span> <br />
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
