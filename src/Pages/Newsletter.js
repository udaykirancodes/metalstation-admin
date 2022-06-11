import React, { useEffect, useState } from 'react'
import { MultiSelect } from "react-multi-select-component";
import { useNavigate } from 'react-router-dom';
import { AllUsers } from '../urls';

import './newsletter.css'

const Newsletter = (props) => {
    const navigate = useNavigate(); 
    const [users , setusers] = useState([]); 
    const [alert , setAlert ] = useState({
        type : 'danger' , 
        msg : '',
        state : false  
    }); 
    const { showAlert } = props;

    const sendEmails = ()=>{

    }

    useEffect(()=>{
        let adminToken = localStorage.getItem('adminToken'); 
        if(!adminToken){
            navigate('/login'); 
        }
        fetch(AllUsers , {
            method:"GET",
            headers: {
                'Content-Type':'application/json',
                'adminToken':adminToken 
            }
        })
        .then((res)=> res.json())
        .then((data)=>{
            if(data.success === true){
                setusers(data.users); 

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

    const options = [
        { value: 'abc@gmail.com', label: 'abc@gmail.com' },
        { value: 'pqr@gmail.com', label: 'pqr@gmail.com' },
        { value: 'xyz@gmail.com', label: 'xyz@gmail.com' },
    ];

    const handleSubmit = () => {
        showAlert("NewLetter Send Successfully!!!", "success")
    }

    // selected emails 
    const [selected, setSelected] = useState([]);

    return (
        <div className='cotainer mx-4 ' style={{ marginTop: '1%' }}>
            <form className='mx-4 newsletter' onSubmit={handleSubmit}>
                
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Subscriber</label>
                    <div className="col-sm-10">
                        <MultiSelect
                            options={options}
                            value={selected}
                            onChange={setSelected}
                            labelledBy="Select"
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputSubject" className="col-sm-2 col-form-label">Subject of the Email : </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control dropdown" id="inputSubject" placeholder='Subject of Newsletter' />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputContent" className="col-sm-2 col-form-label">Body of the Email : </label>
                    <div className="col-sm-10">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Newsletter content'></textarea>
                    </div>
                </div>
                <button type="submit" onClick={sendEmails} className="btn btn-primary">Send</button>
            </form>
        </div>
    )
}

export default Newsletter