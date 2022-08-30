import React, { useState, useEffect } from "react";

import Context from "./Context";

import { AllBlgos, GetAllOrders, GetEnquiries, GetAllProducts, AllSellUrl, AllUsers, AllOrdersUrl, AllScrapUrl } from "../urls";

const GlobalState = (props) => {
    const [users, setusers] = useState([]);
    const [blogs, setblogs] = useState([]);
    const [subscribers, setsubscribers] = useState([]);
    const [products, setproducts] = useState([]);
    const [Orders, setOrders] = useState([])
    const [sell, setsell] = useState([])
    const [adminToken, setadminToken] = useState('');
    const [Enquiry, setEnquiry] = useState([])

    // get all users list 
    const getAllUsers = async () => {
        let token = localStorage.getItem('adminToken');
        fetch(AllUsers, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'adminToken': token
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success === true) {
                    setusers(data.users);
                    console.log('got users');
                    // extract subcribers from users 
                    let sub = data.users.filter((user) => { if (user.emailVerified) { return user } });
                    setsubscribers(sub);
                }
            })
    }


    // get all blogs 
    const getAllBlogs = () => {
        let token = localStorage.getItem('adminToken');
        fetch(AllBlgos, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'adminToken': token
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success === true) {
                    setblogs(data.data.results);
                    console.log('Got Blogs');
                    // showAlert("Fetched Successfully",'success'); 
                }
                else {
                    // showAlert(data.msg,'danger'); 
                }
            })
    }

    // get all the products 
    const getAllProducts = () => {
        let token = localStorage.getItem('adminToken');
        fetch(GetAllProducts, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'adminToken': token
            }
        })
            .then((res) => res.json())
            .then(data => {
                if (data.success) {
                    setproducts(data.pagination.results);
                    console.log('got products');
                }
                else {
                    console.log('error in getting all products');
                }
            })

    }

    // get all orders 
    const getAllOrders = async () => {
        // fetch the data 
        let token = localStorage.getItem('adminToken');
        let res = await fetch(GetAllOrders, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'adminToken': token
            }
        })
        let data = await res.json();
        console.log(data);
        if (data.success) {
            console.log('Got New Orders')
            setOrders(data.orders);
        }
    }

    // get sells 
    // get all the sells 
    const getAllSell = () => {
        let token = localStorage.getItem('adminToken');
        fetch(AllSellUrl, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'adminToken': token
            }
        })
            .then((res) => res.json())
            .then(data => {
                if (data.success) {
                    setsell(data.sells);
                    console.log('got sell');
                }
                else {
                    console.log('error in getting sell');
                }
            })
    }

    // get enquiry 
    const getAllEnquiry = async () => {
        let adminToken = localStorage.getItem('adminToken');
        // fetch the data 
        let res = await fetch(GetEnquiries, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'adminToken': adminToken
            }
        })
        let data = await res.json();
        if (data.success) {
            // console.log(data.data);
            setEnquiry(data.data); // 
        }
    }
    useEffect(() => {
        console.log('Effect : ', Enquiry.length)
    }, [Enquiry])
    // on page load 
    useEffect(() => {
        let token = localStorage.getItem('adminToken');
        if (token) {
            setadminToken(token);
        }
        getAllUsers();
        getAllOrders();
        getAllBlogs();
        getAllSell();
        getAllEnquiry();
        getAllProducts();
    }, [])


    return (
        <Context.Provider value={{ users, setusers, blogs, setblogs, Enquiry, setEnquiry, subscribers, setsubscribers, Orders, setOrders, sell, setsell, products, setproducts, getAllProducts, adminToken, setadminToken }}>
            {props.children}
        </Context.Provider>
    )
}

export default GlobalState; 