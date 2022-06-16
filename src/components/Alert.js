import React from 'react'

export const Alert = (props) => {
    const capital =(word)=>{
        if(word==="danger"){
            word = "Error"
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1) ;
    }
    return (
        <div>
            {props.alert && <div style={{ height: '50px', marginTop:"0" , marginBottom:"10px" }} className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capital(props.alert.type)}: </strong> {props.alert.msg}
            </div>}
        </div>
    )
}
