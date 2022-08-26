import React, { useState, useEffect } from "react";

import Context from "./Context";

import { AllBlgos, GetAllProducts, AllSellUrl, AllUsers, AllOrdersUrl, AllScrapUrl } from "../urls";

const GlobalState = (props) => {

    const [users, setusers] = useState([]);
    const [blogs, setblogs] = useState([]);
    const [subscribers, setsubscribers] = useState([]);
    const [products, setproducts] = useState([]);
    const [orders, setorders] = useState([]);

    const [adminToken, setadminToken] = useState('');


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

    // on page load 
    useEffect(() => {
        let token = localStorage.getItem('adminToken');
        if (token) {
            setadminToken(token);
        }
        getAllUsers();
        getAllBlogs();
        getAllProducts();
    }, [])


    return (
        <Context.Provider value={{ users, setusers, blogs, setblogs, subscribers, setsubscribers, setorders, products, setproducts, getAllProducts, orders, adminToken, setadminToken }}>
            {props.children}
        </Context.Provider>
    )
}

export default GlobalState; 