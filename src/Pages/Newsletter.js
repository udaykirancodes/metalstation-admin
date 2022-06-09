import React from 'react'
import './newsletter.css'

const Newsletter = (props) => {
    const {showAlert} = props;
    const handleSubmit = () =>{
        showAlert("NewLetter Send Successfully!!!", "success")
    }
    return (
        <div className='cotainer mx-4 ' style={{marginTop:'1%'}}>
            <form className='mx-4 newsletter' onSubmit={handleSubmit}>
                <div class="row mb-3">
                    <label for="email" class="col-sm-2 col-form-label">Email (User)</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="email" multiple placeholder='Enter Admin Email Address To send mail' />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Subscriber</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control dropdown" id="inputPassword3" multiple placeholder="enter multiple email separated by comma's "/>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputSubject" class="col-sm-2 col-form-label">Newsletter Subject</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control dropdown" id="inputSubject" placeholder='Subject of Newsletter'/>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputContent" class="col-sm-2 col-form-label">Newsletter Content</label>
                    <div class="col-sm-10">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Newsletter content'></textarea>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Send</button>
            </form>
        </div>
    )
}

export default Newsletter