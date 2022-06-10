import React, { useState } from 'react'
import { MultiSelect } from "react-multi-select-component";

import './newsletter.css'

const Newsletter = (props) => {
    const { showAlert } = props;


    const options = [
        { value: 'email1', label: 'abc@gmail.com' },
        { value: 'email2', label: 'pqr@gmail.com' },
        { value: 'email3', label: 'xyz@gmail.com' },
    ];

    const handleSubmit = () => {
        showAlert("NewLetter Send Successfully!!!", "success")
    }


    const [selected, setSelected] = useState([]);
    return (
        <div className='cotainer mx-4 ' style={{ marginTop: '1%' }}>
            <form className='mx-4 newsletter' onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email (User)</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="email" multiple placeholder='Enter Admin Email Address To send mail' />
                    </div>
                </div>
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
                    <label htmlFor="inputSubject" className="col-sm-2 col-form-label">Newsletter Subject</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control dropdown" id="inputSubject" placeholder='Subject of Newsletter' />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputContent" className="col-sm-2 col-form-label">Newsletter Content</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Newsletter content'></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
        </div>
    )
}

export default Newsletter