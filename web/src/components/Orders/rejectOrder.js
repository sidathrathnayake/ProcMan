import React, { Component } from 'react'
import Sidebar from '../Navigation/Admin_Sidebar';
import axios from 'axios';

/**Defining the initial state research paper amount */
const initialState = {
    order_id:'',
    item_name:'',
    site_name:'',
    priority:'',
    measuring_unit:'',
    required_quantities:'',
    note:'',
    status:'',
    delivery_address:'',
    total_amount:'',
}

export default class Reject_Order extends Component {
    /**Constructor for getting the records */
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
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
            note:response.data.note,
            status:response.data.status,
            delivery_address:response.data.delivery_address,
            total_amount:response.data.total_amount,
        })
        })
        .catch(error => {
        alert(error.message)
        })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
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
        axios.put(`http://localhost:5000/purchase-order/staff-reject-order/${this.state.order_id}`, raised_order)
        .then(response => {
            window.location = '/adminViewOrder'
            alert('Order successfully rejected!!!')
        })
        .catch(error => {
            console.log(error.message);
            alert(error.message)
        })
         
      }

    render() {
        return (
            <div>
                <div className="page-head">
                    <Sidebar/> 
                    <div className="page-header">
                        <h1>
                            <a href="#">
                                <i className="fa fa-coins"></i> &nbsp;&nbsp;Reject Order
                            </a>
                        </h1>
                    </div>    
                </div>    
                <div className="form-container">
                    <form className="form-data" onSubmit={this.onSubmit}>
                        <div class="form-group row" >
                            <label for="form-control-order_id" class="col-4 form-label" style={{marginTop:"8px"}}>Order Id</label>
                            <div class="col-6">
                                <input type="text" className="form-control" id="form-control-order_id" name="order_id" style={{width:"340px"}} value={this.state.order_id} readOnly/>
                            </div>
                        </div><br/>
                        <div class="form-group row" >
                                <label for="form-control-item_name" class="col-4 form-label" style={{marginTop:"8px"}}>Item Name</label>
                            <div class="col-6">
                                <input type="text" className="form-control" id="form-control-item_name" name="item_name" style={{width:"340px"}} value={this.state.item_name} readOnly/>
                            </div>
                        </div><br/>
                        <div class="form-group row" >
                                <label for="form-control-site_name" class="col-4 form-label" style={{marginTop:"8px"}}>Site Name</label>
                            <div class="col-6">
                                <input type="text" className="form-control" id="form-control-site_name" name="site_name" style={{width:"340px"}} value={this.state.site_name} readOnly/>
                            </div>
                        </div><br/>
                        <div class="form-group row" >
                                <label for="form-control-priority" class="col-4 form-label" style={{marginTop:"8px"}}>Priority</label>
                            <div class="col-6">
                                <input type="text" className="form-control" id="form-control-priority" name="priority" style={{width:"340px"}} value={this.state.priority} readOnly/>
                            </div>
                        </div><br/>
                        <div class="form-group row" >
                            <label for="form-control-measuring_unit" class="col-4 form-label" style={{marginTop:"8px"}}>Measuring Unit</label>
                            <div class="col-6">
                                <input type="text" className="form-control" id="form-control-measuring_unit" name="measuring_unit" style={{width:"340px"}} value={this.state.measuring_unit} readOnly/>
                            </div>
                        </div><br/>
                        <div class="form-group row" >
                            <label for="form-control-required_quantities" class="col-4 form-label" style={{marginTop:"8px"}}>Required Quantities</label>
                            <div class="col-6">
                                <input type="text" className="form-control" id="form-control-required_quantities" name="required_quantities" style={{width:"340px"}} value={this.state.required_quantities} readOnly/>
                            </div>
                        </div><br/>
                        <div class="form-group row" >
                            <label for="form-control-note" class="col-4 form-label" style={{marginTop:"13px"}}>Rejection Note</label>
                            <div class="col-6">
                                <textarea className="form-control" id="form-control-note" name="note" style={{width:"340px"}} onChange={this.onChange} value={this.state.note}/>
                            </div>
                        </div><br/>
                        <div class="form-group row" >
                            <label for="form-control-status" class="col-4 form-label" style={{marginTop:"8px"}}>Status</label>
                            <div class="col-6">
                                <input type="text" className="form-control" id="form-control-status" name="status" style={{width:"340px"}} value={this.state.status} readOnly/>
                            </div>
                        </div><br/>
                        <div class="form-group row" >
                            <label for="form-control-delivery_address" class="col-4 form-label" style={{marginTop:"8px"}}>Delivery Address</label>
                            <div class="col-6">
                                <input type="text" className="form-control" id="form-control-delivery_address" name="delivery_address" style={{width:"340px"}} value={this.state.delivery_address} readOnly/>
                            </div>
                        </div><br/>
                        <div class="form-group row" >
                            <label for="form-control-total_amount" class="col-4 form-label" style={{marginTop:"8px"}}>Total Amount</label>
                            <div class="col-6">
                               <input type="text" className="form-control" id="form-control-total_amount" name="total_amount" style={{width:"340px"}} value={"Rs."+this.state.total_amount} readOnly/>
                            </div>
                        </div><br/><br/>
                        <button type="submit" className="btn btn-primary btndata">Confirm Approve</button>
                    </form>
                </div>
            </div>
        )
    }
}
