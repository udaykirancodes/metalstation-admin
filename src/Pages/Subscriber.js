import React, { useContext, useEffect, useState } from 'react'
import './subscriber.css'
import { AllSubscribers } from "../urls";
import { Alert } from '../components/Alert';
import Context from '../context/Context';
import { useNavigate } from 'react-router-dom';
const Subscriber = () => {
    const navigate = useNavigate()
    const [subscribers, setsubscribers] = useState([]);
    const [alert, setAlert] = useState({
        type: 'danger',
        msg: '',
        state: false
    });
    // pagination related code 
    const [currentpage, setcurrentpage] = useState(1);
    const [perPage, setPerPage] = useState(5);

    const indexOfLast = currentpage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    useEffect(() => {
        let adminToken = localStorage.getItem('adminToken');
        if (!adminToken) {
            navigate('/login');
        }
        fetch(AllSubscribers, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'adminToken': adminToken
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success === true) {
                    setsubscribers(data.subscribers);
                    setAlert({
                        type: 'success',
                        msg: "Fetched Successfully",
                        state: true
                    })
                    setTimeout(() => {
                        setAlert({
                            state: false
                        })
                    }, 3000);
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

    const [search, setSearch] = useState('');
    return (
        <>
            {/* <div style={{height:'60px'}}></div> */}
            {
                alert.state && <Alert alert={alert} />
            }
            <div className="customer d-flex" style={{ margin: '60px 0 0 0' }}>
                <div className="customer_head head">
                    <h4>All Subscribers</h4>
                </div>
                <div className="customer_head col-md-2">
                    <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} className="form-control" id="price" placeholder='Type Name or Email' />
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
                            search ?
                                // with search filter
                                subscribers.map((element, index) => {
                                    let s = search.toLocaleLowerCase();
                                    if (element.email.includes(s) || element.name.includes(s)) {
                                        if (element.subscribed) {
                                            return <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{element.name}</td>
                                                <td>{element.email}</td>
                                            </tr>
                                        }
                                    }
                                })

                                :
                                // with no search filter 
                                subscribers.map((element, index) => {
                                    if (index >= indexOfFirst && index < indexOfLast) {
                                        if (element.subscribed) {
                                            return <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{element.name}</td>
                                                <td>{element.email}</td>
                                            </tr>
                                        }
                                    }
                                })
                        }

                    </table>
                </div>
            </div>
            <Pagination currentproducts={subscribers.length / perPage} currentpage={currentpage} setcurrentpage={setcurrentpage} />
        </>
    )
}

export default Subscriber