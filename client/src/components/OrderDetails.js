import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function OrderDetails() {
    const [CustomerID, setCustomerID] = useState('')
    const [Status, setStatus] = useState('')
    const [Date, setDate] = useState('')

    const { id } = useParams()
    //var customer = null
    const [order, setOrder] = useState(
        {
            CustomerID: "",
            Status: "",
            Date: "",
            __v: 0,
            _id: ""
        })

    useEffect(() => {
        const fetchOrder = async () => {
            // fetch(`/api/users/${id}`)
            // .then(res => res.json)
            // .then(data => setCustomer(data))
            const response = await fetch(`/api/orders/getasingleorder/${id}`)
            const json = await response.json()
            //console.log(json["name"])
            if (response.ok) {
                //console.log("json "+json["name"])
                setOrder(
                    {
                        CustomerID: `${json["CustomerID"]}`,
                        Status: `${json["Status"]}`,
                        Date: `${json["Date"]}`,
                        __v: 0,
                        _id: `${json["_id"]}`
                    })
                setCustomerID(json["CustomerID"])
                setStatus(json["Status"])
                setDate(json["Date"])
            } else {
                console.log("not ok")
            }

        }

        fetchOrder()

    }, [setOrder])

    return (
        <div class="liton__wishlist-area pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        {/* <!-- PRODUCT TAB AREA START --> */}
                        <div class="ltn__product-tab-area">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-3">
                                        <div class="ltn__tab-menu-list mb-50">
                                            <div class="nav">
                                                <a class="active show" data-toggle="tab" href="#liton_tab_1_1">Overview</a>
                                                <a data-toggle="tab" href="#liton_tab_1_2">Tracking Info</a>
                                                <a data-toggle="tab" href="#liton_tab_1_3">Feedback</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-9">
                                        <div class="tab-content">
                                            <div class="tab-pane fade active show" id="liton_tab_1_1">
                                                <div class="ltn__myaccount-tab-content-inner">
                                                    <div class="row">
                                                        <div class="col-md-6 col-12 learts-mb-30">
                                                            <h4>Order ID <small>{id}</small></h4>
                                                            <h4>Customer ID <small>{CustomerID}</small></h4>
                                                            <h4>Status <small>{Status}</small></h4>
                                                            <h4>Date <small>{Date}</small></h4>
                                                            {/* <address>
                                                                <p><strong>Alex Tuntuni</strong></p>
                                                                <p>1355 Market St, Suite 900 <br />
                                                                    San Francisco, CA 94103</p>
                                                                <p>Mobile: (123) 456-7890</p>
                                                            </address> */}
                                                        </div>                                                        
                                                    </div>
                                                </div>
                                                <div class="ltn__myaccount-tab-content-inner">
                                                    <div class="table-responsive">
                                                        <table class="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Product ID</th>
                                                                    <th>Name</th>
                                                                    <th>Price</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {/* {customerOrders.map((order) => (
                                                                    <tr key={order._id}>
                                                                        <td>{order._id}</td>
                                                                        <td>{order.date}</td>
                                                                        <td>{order.price}</td>
                                                                        <td>{order.deliveryStatus}</td>
                                                                        <td><Link to={{ pathname: `/my-order/${order._id}` }}><i class="far fa-arrow-to-bottom mr-1"></i> View Order</Link></td>
                                                                    </tr>
                                                                ))} */}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="liton_tab_1_2">
                                                <div class="ltn__myaccount-tab-content-inner">
                                                    <p>Traking Info</p>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="liton_tab_1_3">
                                            <div class="ltn__myaccount-tab-content-inner">
                                                    <p>Feedback</p>
                                                    <div class="ltn__form-box">
                                                        <form >
                                                            <div class="row mb-50">
                                                                <div class="col-md-6">
                                                                    <label>Name:</label>
                                                                    <input type="text" name="ltn__name"
                                                                         />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label>Email:</label>
                                                                    <input type="email" name="ltn__email"
                                                                         />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label>Phone:</label>
                                                                    <input type="text" name="ltn__phone"
                                                                         />
                                                                </div>
                                                                <div class="col-md-12">
                                                                    <label>Address:</label>
                                                                    <input type="text" name="ltn__email"
                                                                         />
                                                                </div>
                                                            </div>                                                            
                                                            <div class="btn-wrapper">
                                                                <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Save Changes</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- PRODUCT TAB AREA END --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default OrderDetails;