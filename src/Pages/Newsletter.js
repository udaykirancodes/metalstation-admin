import React, { useEffect, useState } from 'react'
import { MultiSelect } from "react-multi-select-component";
import { useNavigate } from 'react-router-dom';
import { Alert } from '../components/Alert';
import { AllUsers, SendEmailUrl } from '../urls';

import './newsletter.css'

const Newsletter = (props) => {
    const { showAlert } = props;

    

    
    const navigate = useNavigate();
    const [input, setinput] = useState({})

    // selected emails 
    const [selected, setSelected] = useState([]);

    //Submitted hock
    const [submitted, setSubmitted] = useState(false)



    const [users, setusers] = useState([]);
    

    const [alert, setAlert] = useState({
        type: 'danger',
        msg: '',
        state: false
    });

    const handleInput = (e)=>{
        setinput({...input , [e.target.name]:e.target.value})
        console.log(input); 
    }

    const sendEmails = () => {
        setSubmitted(false);
        let adminToken = localStorage.getItem('adminToken');
        if (!adminToken) {
            navigate('/login');
        }
        console.log(selected.map(element =>{return element.value}))
        fetch(SendEmailUrl, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'adminToken':adminToken
            },
            body: JSON.stringify({
                emailids: selected.map(element =>{return element.value}),
                subject: input.subject,
                text: input.text
            }),
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            if (data.success === true) {
                setSubmitted(true);
            }
            else {
                setAlert(data.msg, 'danger')
            }
        })
    };
    const [emails , setEmails ] = useState([{
        value:'',
        label:''
    }]);
    useEffect(() => {
        let adminToken = localStorage.getItem('adminToken');
        if (!adminToken) {
            navigate('/login');
        }
        fetch(AllUsers, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'adminToken': adminToken
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success === true) {
                    setusers(data.users);
                    console.log(data.users);
                    let newOptions = users.map((element)=>{
                            if(element.email){
                                return {label:element.email , value:element.email}
                            }
                    })
                    setEmails(newOptions); 
                    console.log(newOptions)
                }
                else {
                    setAlert({
                        type: 'danger',
                        msg: data.msg,
                        state: true
                    })
                    setTimeout(() => {
                        setAlert({
                            state: false
                        })
                    }, 5000);
                }
            })
    }, [])
    

    return (
        <>
            {
                alert.state && <Alert alert={alert} />
            }
            <div className='cotainer mx-4 ' style={{ marginTop: '100px' }}>
                <form className='mx-4 newsletter'>

                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Subscriber</label>
                        <div className="col-sm-10">
                            <MultiSelect
                                name='email'
                                options={emails}
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select"
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputSubject" className="col-sm-2 col-form-label">Subject of the Email : </label>
                        <div className="col-sm-10">
                            <input type="text" name='subject' className="form-control dropdown" onChange={(e) => handleInput(e)} value={input.subject || ''} id="inputSubject" placeholder='Subject of Newsletter' />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputContent" className="col-sm-2 col-form-label">Body of the Email : </label>
                        <div className="col-sm-10">
                            <textarea name='text' className="form-control" id="exampleFormControlTextarea1" onChange={(e) => handleInput(e)} value={input.text || ''} rows="3" placeholder='Newsletter content'></textarea>
                        </div>
                    </div>
                    <button type="button" onClick={sendEmails} className="btn btn-primary">Send</button>
                </form>
            </div>
        </>
    )
}

export default Newsletter