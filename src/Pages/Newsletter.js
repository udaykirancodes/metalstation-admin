import React, { useEffect, useState } from 'react'
import { MultiSelect } from "react-multi-select-component";
import { useNavigate } from 'react-router-dom';
import { Alert } from '../components/Alert';
import { AllUsers, SendEmailUrl } from '../urls';

import './newsletter.css'

const Newsletter = (props) => {
    const { showAlert } = props;
    const options = [
        { value: 'abc@gmail.com', label: 'saurabhvishwakarma745@gmail.com' },
        { value: 'pqr@gmail.com', label: 'pqr@gmail.com' },
        { value: 'xyz@gmail.com', label: 'xyz@gmail.com' },
    ];
    const navigate = useNavigate();
    const [input, setinput] = useState({})

    // selected emails 
    const [selected, setSelected] = useState([]);


    //Submitted hock
    const [submitted, setSubmitted] = useState('false')



    const [users, setusers] = useState([]);
    const [alert, setAlert] = useState({
        type: 'danger',
        msg: '',
        state: false
    });

    const handleInput = (e) => {
        setusers({ ...selected, [e.target.name]: e.target.value });
    }

    const sendEmails = () => {
        setSubmitted(false);

        fetch(SendEmailUrl, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: selected,
                subject: input.subject,
                text: input.text
            }),
        })
            .then((res) => {

                return res.json();
            })
            .then((data) => {
                if (data.success === true) {
                    setSubmitted(true);
                }
                else {
                    setAlert(data.msg, 'danger')
                }
            })
    };

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

    // const handleSubmit = () => {
    //     showAlert("NewLetter Send Successfully!!!", "success")
    // }



    return (
        <>
            {
                alert.state && <Alert alert={alert} />
            }
            <div className='cotainer mx-4 ' style={{ marginTop: '1%' }}>
                <form className='mx-4 newsletter'>

                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Subscriber</label>
                        <div className="col-sm-10">
                            <MultiSelect
                                name='email'
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
                            <input type="text" name='subject' className="form-control dropdown" onChange={(e) => handleInput(e)} value={input.subject} id="inputSubject" placeholder='Subject of Newsletter' />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputContent" className="col-sm-2 col-form-label">Body of the Email : </label>
                        <div className="col-sm-10">
                            <textarea name='text' className="form-control" id="exampleFormControlTextarea1" onChange={(e) => handleInput(e)} value={input.text} rows="3" placeholder='Newsletter content'></textarea>
                        </div>
                    </div>
                    <button type="submit" onClick={sendEmails} className="btn btn-primary">Send</button>
                </form>
            </div>
        </>
    )
}

export default Newsletter