import React, { useContext , useEffect , useState  } from 'react'
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';
import './customer.css'
import { AllSubscribers, AllUsers } from '../urls';
import { Alert } from '../components/Alert';
const Customer = () => {
    let navigate = useNavigate(); 

    const [customers , setcustomers] = useState([]); 

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
                setcustomers(data.users); 
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
    } ,[])
    const [search , setSearch] = useState(''); 
    return (
        <>
            <div style={{height:'60px'}}></div>
                
            { alert.state &&  <Alert alert={alert} />}
            <div className="customer d-flex"style={{margin:'10px 0'}}>
                <div className="customer_head head">
                    <h4>Customers</h4>
                </div>
                <div className="customer_head col-md-2">
                    <input type="text" onChange={(e)=>setSearch(e.target.value)} value={search} className="form-control" id="price" placeholder='Type Name or Email' />
                </div>
            </div>
            <div style={{ marginLeft: '20px',paddingBottom:'10%', marginRight: '20px' }}>
                <div className="customer_info">
                    <table>
                        <tbody>
                        <tr>
                            <th>SlNo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Subscribed</th>
                        </tr>

                        {
                            search ?

                            customers.map((element,index)=>{
                                // if there is any search filter 
                                let s = search.toLocaleLowerCase();
                                if(element.email.includes(s) || element.name.includes(s)){
                                    return <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{element.name}</td>
                                    <td>{element.email}</td>
                                    <td>{element.phone}</td>
                                    <td>{element.subscribed ? 'Yes' : 'No'}</td>
                                </tr>
                                }
                            })

                            :
                            customers.map((element,index)=>{
                                return <tr key={index}>
                                <td>{index+1}</td>
                                <td>{element.name}</td>
                                <td>{element.email}</td>
                                <td>{element.phone}</td>
                                <td>{element.subscribed ? 'Yes' : 'No'}</td>
                            </tr>
                            })
                        }
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </>
    )
}

export default Customer