import React, { Component } from 'react'
import Sidebar from '../Navigation/Sidebar';
import axios from 'axios';

/**Defining the initial state research paper amount */
const initialState = {
    order_id:'',
    item_name:'',
    site_name:'',
    priority:'',
    measuring_unit:'',
    required_quantities:'',
    status:'',
    delivery_address:'',
    total_amount:'',
}

export default class Approve_Order extends Component {
    /**Constructor for getting the records */
    constructor(props) {
        super(props);
        this.onSupplierChange = this.onSupplierChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }
    
    componentDidMount() {
        axios.get(`http://localhost:5000/purchase-order/get-one-order/${this.props.match.params.order_id}`)
        .then(response => {
        this.setState({ 
            order_id: response.data.order_id,
            item_name: response.data.item_name,
            site_name:response.data.site_name,
            priority:response.data.priority,
            measuring_unit:response.data.measuring_unit,
            required_quantities: response.data.required_quantities,
            status:response.data.status,
            delivery_address:response.data.delivery_address,
            total_amount:response.data.total_amount,
        })
        })
        .catch(error => {
        alert(error.message)
        })
    }
    
    onSupplierChange(e) {
        this.setState({ supplierName: e.value });
    }

    onSubmit(e) {
        e.preventDefault();
        let raised_order = {
            item_name: this.state.item_name,
            measuring_unit: this.state.measuring_unit,
            required_quantities: this.state.required_quantities,
            delivery_address: this.state.delivery_address,
            total_amount: this.state.total_amount,
            supplierName: this.state.supplierName
        }
        axios.put(`http://localhost:5000/purchase-order/staff-approve-order/${this.state.order_id}`, raised_order)
        .then(response => {
            window.location = '/adminViewOrder'
            alert('Order successfully approved!!!')
        })
        .catch(error => {
            console.log(error.message);
            alert(error.message)
        })
         
      }

    render() {
        return (
            <div className="wrapper">
                <Sidebar/> 
                <div className="adminhome-container">
                    <div className="adminnav">
                        <h1>
                            <a href="#">
                                <i className="fa fa-coins"></i> &nbsp;&nbsp;Approve Order
                            </a>
                        </h1>
                    
                    </div>
                    <div>
                        <div className="raisedOrderAddCont">
                            <form onSubmit={this.onSubmit}>
                                <div class="form-group row" >
                                    <label for="form-control-order_id" class="col-4 form-label">Order Id</label>
                                    <div class="col-6">
                                        <input type="text" className="form-control" id="form-control-order_id" name="order_id" value={this.state.order_id} readOnly/>
                                    </div>
                                </div><br/>
                                <div class="form-group row" >
                                    <label for="form-control-item_name" class="col-4 form-label">Item Name</label>
                                    <div class="col-6">
                                        <input type="text" className="form-control" id="form-control-item_name" name="item_name" value={this.state.item_name} readOnly/>
                                    </div>
                                </div><br/>
                                <div class="form-group row" >
                                    <label for="form-control-site_name" class="col-4 form-label">Site Name</label>
                                    <div class="col-6">
                                        <input type="text" className="form-control" id="form-control-site_name" name="site_name" value={this.state.site_name} readOnly/>
                                    </div>
                                </div><br/>
                                <div class="form-group row" >
                                    <label for="form-control-priority" class="col-4 form-label">Priority</label>
                                    <div class="col-6">
                                        <input type="text" className="form-control" id="form-control-priority" name="priority" value={this.state.priority} readOnly/>
                                    </div>
                                </div><br/>
                                <div class="form-group row" >
                                    <label for="form-control-measuring_unit" class="col-4 form-label">Measuring Unit</label>
                                    <div class="col-6">
                                        <input type="text" className="form-control" id="form-control-measuring_unit" name="measuring_unit" value={this.state.measuring_unit} readOnly/>
                                    </div>
                                </div><br/>
                                <div class="form-group row" >
                                    <label for="form-control-required_quantities" class="col-4 form-label">Required Quantities</label>
                                    <div class="col-6">
                                        <input type="text" className="form-control" id="form-control-required_quantities" name="required_quantities" value={this.state.required_quantities} readOnly/>
                                    </div>
                                </div><br/>
                                <div class="form-group row" >
                                    <label for="form-control-status" class="col-4 form-label">Status</label>
                                    <div class="col-6">
                                        <input type="text" className="form-control" id="form-control-status" name="status" value={this.state.status} readOnly/>
                                    </div>
                                </div><br/>
                                <div class="form-group row" >
                                    <label for="form-control-delivery_address" class="col-4 form-label">Delivery Address</label>
                                    <div class="col-6">
                                        <input type="text" className="form-control" id="form-control-delivery_address" name="delivery_address" value={"Rs."+this.state.delivery_address} readOnly/>
                                    </div>
                                </div><br/>
                                <div class="form-group row" >
                                    <label for="form-control-total_amount" class="col-4 form-label">Total Amount</label>
                                    <div class="col-6">
                                        <input type="text" className="form-control" id="form-control-total_amount" name="total_amount" value={"Rs."+this.state.total_amount} readOnly/>
                                    </div>
                                </div><br/>
                                <button type="submit" class="dark-btn" id="updateBtn">Confirm Approve</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
