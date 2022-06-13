import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Alert} from "../components/Alert"
import {AdminLogin} from '../urls'; 
import './signin.css'
const Signin = () => {
    const navigate = useNavigate(); 
    const [input , setInput] = useState({
        email : '',
        password : ''
    })

    const [alert , setAlert ] = useState({
        type : 'danger' , 
        msg : 'hello wolrd',
        state : false  
    }); 

    const handleInput = (e)=>{
        console.log(input); 
        setInput({...input , [e.target.name ] : e.target.value})
    }

    const handleSubmit = (e)=> {
        e.preventDefault(); 
        fetch(AdminLogin , {
            method:"POST",
            headers: {
                'Content-Type':'application/json'
            },
            body : JSON.stringify(input)
        })
        .then((res)=> res.json())
        .then((data)=>{
            if(data.success === true){
                let adminToken = data.adminToken; 
                localStorage.setItem('adminToken',adminToken); 
                navigate('/')
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
    }
    return (
        <>
        
        <div className='signin mx-auto my-auto' >
            <div className='my-5'>{
                    alert.state &&  <Alert alert={alert}  />
                }
            </div>
            <form className='auth-inner'>
                <h3>Sign In</h3>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        name='email'
                        onChange={handleInput}
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        name='password'
                        onChange={handleInput}
                    />
                </div>
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit" onClick={(e)=>handleSubmit(e)} className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>

        </>

    )
}

export default Signin