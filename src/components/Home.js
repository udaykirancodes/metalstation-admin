import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';
import { AllUsers } from '../urls';
import './home.css'

const Home = () => {
    const {SetUsers} = useContext(Context); 
    const navigate = useNavigate(); 
    // useEffect(()=>{
    //     let adminToken = localStorage.getItem('adminToken'); 
    //     if(!adminToken){
    //         navigate('/login'); 
    //     }
    //     fetch(AllUsers , {
    //         method:"GET",
    //         headers: {
    //             'Content-Type':'application/json',
    //             'adminToken':adminToken 
    //         }
    //     })
    //     .then((res)=> res.json())
    //     .then((data)=>{
    //         if(data.success === true){
    //             SetUsers(data.users); 
    //         }
    //     })
    // },[])
       
    return (
        <>
            <div className="home my-4" style={{paddingTop:'5%'}} >
                <div className="home_content" >
                    <div className="home_inside">
                        <h6>Total Customer</h6>
                        <h2>0</h2>
                    </div>
                </div>
                <div className="home_content" >
                    <div className="home_inside">
                        <h6>Total Products</h6>
                        <h2>0</h2>
                    </div>
                </div>
                <div className="home_content" >
                    <div className="home_inside">
                        <h6>Total Order</h6>
                        <h2>0</h2>
                    </div>
                </div>
                <div className="home_content" >
                    <div className="home_inside">
                        <h6>Total Sales</h6>
                        <h2>Rs:0.0</h2>
                    </div>
                </div>
                <div className="home_content" >
                    <div className="home_inside">
                        <h6>Order Stats</h6>
                    </div>
                </div>
            </div>
            <h2 style={{ marginTop: '20px', marginLeft: '20px' }}>Order Information</h2>
            <hr />
            <div className="Order">
                <div className="Order_Info my-4">
                    <div className="Order_inside">
                        <i className="fa-solid fa-book-bookmark my-auto mx-2 d-inline"></i>
                        <h4 className='d-inline my-auto mx-4'>Order Placed: 0</h4>
                    </div>
                </div>
                <div className="Order_Info my-4">
                    <div className="Order_inside">
                        <i className="fa-solid fa-circle-check my-auto mx-2 d-inline"></i>
                        <h4 className='d-inline my-auto mx-4'>Order Confirmed: 0</h4>
                    </div>
                </div>
                <div className="Order_Info my-4">
                    <div className="Order_inside">
                        <i className="fa-solid fa-box-archive my-auto mx-2 d-inline"></i>
                        <h4 className='d-inline my-auto mx-4'>Order Processed: 0</h4>
                    </div>
                </div>
                <div className="Order_Info my-4">
                    <div className="Order_inside">
                        <i className="fa-solid fa-truck my-auto mx-2 d-inline"></i>
                        <h4 className='d-inline my-auto mx-4'>Order Delivered: 0</h4>
                    </div>
                </div>
            </div>
            <h2 style={{ marginTop: '20px', marginLeft: '20px' }}>Other Information</h2>
            <hr />
        </>
    )
}

export default Home