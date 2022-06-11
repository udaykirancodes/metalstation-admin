import React, { useContext, useEffect, useState } from 'react'
import './subscriber.css'
import {AllSubscribers} from "../urls"; 
import { Alert } from '../components/Alert';
import Context from '../context/Context';
import { useNavigate } from 'react-router-dom';
const Subscriber = () => {
    const navigate = useNavigate()
    const [subscribers , setsubscribers ] = useState([]); 
    const [alert , setAlert ] = useState({
        type : 'danger' , 
        msg : '',
        state : false  
    }); 

    useEffect(()=>{
        let adminToken = localStorage.getItem('adminToken'); 
        if(!adminToken){
            navigate('/login'); 
        }
        fetch(AllSubscribers , {
            method:"GET",
            headers: {
                'Content-Type':'application/json',
                'adminToken':adminToken 
            }
        })
        .then((res)=> res.json())
        .then((data)=>{
            if(data.success === true){
                setsubscribers(data.subscribers); 
                setAlert({
                    type:'success',
                    msg : "Fetched Successfully" , 
                    state:true 
                })
                setTimeout(() => {
                    setAlert({
                        state:false 
                    })
                }, 3000);
            }
            else{
                setAlert({
                    type:'danger',
                    msg : data.msg , 
                    state:true 
                })
                setTimeout(() => {
                    setAlert({
                        state:false 
                    })
                }, 5000);
            }
        })
    },[])

    const {users} = useContext(Context); 
     return (
        <>
            {
               alert.state && <Alert alert={alert} />
            }
            <div className="subscriber d-flex" style={{  marginBottom: '20px' }}>
                <div className="subscriber_head head" style={{ marginRight: '44%', marginLeft: '20px' }}>
                    <h4>All Subscribers</h4>
                </div>
            </div>
            
            <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                <div className="subscriber_info">
                    <table>
                        <tr>
                            <th>Sl No</th>
                            <th>Email</th>
                            <th>Name</th>
                        </tr>
                        {
                            subscribers.length && 
                            subscribers.map((element,index)=>{
                                if(element.subscribed){
                                    return <tr>
                                            <td>{index+1}</td>
                                            <td>{element.name}</td>
                                            <td>{element.email}</td>
                                        </tr>
                                }
                            })
                        }
                        
                    </table>
                </div>
            </div>
        </>
    )
}

export default Subscriber