import './order.css'
const Order = () => {
    return (
        <>
            <div className="order d-flex" style={{  marginBottom:'20px'}}>
                <div className="order_head head" style={{marginRight:'44%', marginLeft:'20px'}}>
                    <h4>Order</h4>
                </div>
                <div className="order_head col-md-2">
                    <select id="brand" className="form-select">
                        <option selected>Filter By Payment Status</option>
                        <option>Paid</option>
                        <option>Unpaid</option>
                    </select>
                </div>
                <div className="order_head col-md-2">
                    <select id="brand" className="form-select">
                        <option selected>Filter By Delivery Status</option>
                        <option>Placed</option>
                        <option>Cofirmed</option>
                        <option>Processed</option>
                        <option>Shipped</option>
                    </select>
                </div>
                <div className="order_head col-md-2">
                    <input type="text" className="form-control" id="price" placeholder='Type Order Code' />
                </div>
            </div>
            <div style={{marginLeft:'20px', marginRight:'20px'}}>
                <div className="order_info" id="first">
                    <table  >
                        <tr className='first'>
                            <th>#</th>
                            <th>Order Code</th>
                            <th>Num of product</th>
                            <th>Customer</th>
                            <th>Amount</th>
                            <th>Delivery Status</th>
                            <th>Payment Status</th>
                        </tr>
                        <tr>
                            <td>g</td>
                            <td>ggg</td>
                            <td>ghsd</td>
                            <td>tetg</td>
                            <td>tetge</td>
                            <td>gge</td>
                            <td>gege</td>
                        </tr>
                        <tr>
                            <td>g</td>
                            <td>ggg</td>
                            <td>ghsd</td>
                            <td>tetg</td>
                            <td>tetge</td>
                            <td>gge</td>
                            <td>gege</td>
                        </tr>
                        <tr>
                            <td>g</td>
                            <td>ggg</td>
                            <td>ghsd</td>
                            <td>tetg</td>
                            <td>tetge</td>
                            <td>gge</td>
                            <td>gege</td>
                        </tr>
                        <tr>
                            <td>g</td>
                            <td>ggg</td>
                            <td>ghsd</td>
                            <td>tetg</td>
                            <td>tetge</td>
                            <td>gge</td>
                            <td>gege</td>
                        </tr>

                        <tr>
                            <td>g</td>
                            <td>ggg</td>
                            <td>ghsd</td>
                            <td>tetg</td>
                            <td>tetge</td>
                            <td>gge</td>
                            <td>gege</td>
                        </tr>
                        <tr>
                            <td>g</td>
                            <td>ggg</td>
                            <td>ghsd</td>
                            <td>tetg</td>
                            <td>tetge</td>
                            <td>gge</td>
                            <td>gege</td>
                        </tr>
                        <tr>
                            <td>g</td>
                            <td>ggg</td>
                            <td>ghsd</td>
                            <td>tetg</td>
                            <td>tetge</td>
                            <td>gge</td>
                            <td>gege</td>
                        </tr>
                        <tr>
                            <td>g</td>
                            <td>ggg</td>
                            <td>ghsd</td>
                            <td>tetg</td>
                            <td>tetge</td>
                            <td>gge</td>
                            <td>gege</td>
                        </tr>
                        <tr>
                            <td>g</td>
                            <td>ggg</td>
                            <td>ghsd</td>
                            <td>tetg</td>
                            <td>tetge</td>
                            <td>gge</td>
                            <td>gege</td>
                        </tr>
                        <tr>
                            <td>g</td>
                            <td>ggg</td>
                            <td>ghsd</td>
                            <td>tetg</td>
                            <td>tetge</td>
                            <td>gge</td>
                            <td>gege</td>
                        </tr>
                        </table>
                        </div>
                       
                <div class="container mt-4">
                <ul class="pagination justify-content-center">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#first">1</a></li>
    <li class="page-item"><a class="page-link" href="#second">2</a></li>
    <li class="page-item"><a class="page-link" href="#third">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
        </div>
            </div>
        </>
    )
}

export default Order
