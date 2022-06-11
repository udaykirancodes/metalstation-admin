import React, { useEffect, useState } from "react";

import Context from "./Context";

const GlobalState = (props)=>{

    const [users , setusers] = useState([{}]);

    const SetUsers = (users)=>{
        console.log('settings users'); 
        console.log(users); 
        setusers(users); 
    }

    const [blogs , setblogs ] = useState([]); 

    const SetBlogs = (blogs)=>{
        setblogs(blogs); 
    }
    useEffect(()=>{

    })

    return (
        <Context.Provider value={{users , SetUsers }}>
            {props.children}
        </Context.Provider>
    )
}

export default GlobalState ; 