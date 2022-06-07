import React from 'react'
import './subscriber.css'

const Subscriber = () => {
    return (
        <>
            <div className="subscriber d-flex" style={{  marginBottom: '20px' }}>
                <div className="subscriber_head head" style={{ marginRight: '44%', marginLeft: '20px' }}>
                    <h4>subscriber</h4>
                </div>
            </div>
            <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                <div className="subscriber_info">
                    <table>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Date</th>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Subscriber