import React, { Component } from 'react'
import Sidebar from '../Navigation/Admin_Sidebar';
import axios from 'axios';

/**Defining the initial state research paper amount */
const initialState = {
    order_id:'',
    item_name:'',
    measuring_unit:'',
    required_quantities:'',
    delivery_address:'',
    total_amount:'',
    supplierName:'',
}

export default class Add_Raised_Orders extends Component {
    /**Constructor for getting the records */
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }
    
    componentDidMount() {
        axios.get(`http://localhost:5000/workshop/get/${this.props.match.params.order_id}`)
        .then(response => {
        this.setState({ 
            order_id: response.data.data.order_id,
            item_name: response.data.data.item_name,
            measuring_unit:response.data.data.measuring_unit,
            required_quantities: response.data.data.required_quantities,
            delivery_address:response.data.data.delivery_address,
            total_amount:response.data.data.total_amount,
        })
        })
        .catch(error => {
        alert(error.message)
        })

        axios.get(`http://localhost:5000/supplier/supplierdata2/${this.state.item_name}`)
        .then(response => {
            this.setState({ supplierName: response.data.supplierName});
        })
        .catch(error => {
            alert(error.message)
        })
    }

    onSubmit(e) {
        e.preventDefault();
        let raised_order = {
            order_id: this.state.order_id,
            item_name: this.state.item_name,
            measuring_unit: this.state.measuring_unit,
            required_quantities: this.state.required_quantities,
            delivery_address: this.state.delivery_address,
            total_amount: this.state.total_amount,
            supplierName: this.state.supplierName
        }
        axios.post('http://localhost:5000/raise-order/add/', raised_order)
        .then(response => {
            alert('Order successfully raised!!!');
            window.location = '/view_approved_orders';
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
                                <i className="fa fa-coins"></i> &nbsp;&nbsp;Add To Raised Orders
                            </a>
                        </h1>
                    </div>
                </div>    
                <div className="form-container">
                    <form className="form-data" onSubmit={this.onSubmit}>
                        <div class="form-group row" >
                            <label for="form-control-order_id" class="col-4 form-label" style={{marginTop:"8px"}}>Order Id</label>
                            <div class="col-6">
                                <input type="text" className="form-control addInput" id="form-control-order_id" name="order_id" style={{width:"340px"}} value={this.state.order_id} readOnly/>
                            </div>
                        </div><br/>
                        <div class="form-group row" >
                            <label for="form-control-shippingAddress" class="col-4 form-label" style={{marginTop:"8px"}}>Item Name</label>
                            <div class="col-6">
                                <input type="text" className="form-control addInput" id="form-control-item_name" name="item_name" style={{width:"340px"}} value={this.state.item_name} readOnly/>
                            </div>
                        </div><br/>
                        <div class="form-group row" >
                            <label for="form-control-measuring_unit" class="col-4 form-label" style={{marginTop:"8px"}}>Measuring Unit</label>
                            <div class="col-6">
                                <input type="text" className="form-control addInput" id="form-control-measuring_unit" name="measuring_unit" style={{width:"340px"}} value={this.state.measuring_unit} readOnly/>
                            </div>
                        </div><br/>
                        <div class="form-group row" >
                            <label for="form-control-required_quantities" class="col-4 form-label" style={{marginTop:"8px"}}>Required Quantities</label>
                            <div class="col-6">
                                <input type="text" className="form-control addInput" id="form-control-required_quantities" name="required_quantities" style={{width:"340px"}} value={this.state.required_quantities} readOnly/>
                            </div>
                        </div><br/>
                        <div class="form-group row" >
                            <label for="form-control-delivery_address" class="col-4 form-label" style={{marginTop:"8px"}}>Delivery Address</label>
                            <div class="col-6">
                                <input type="text" className="form-control addInput" id="form-control-delivery_address" name="delivery_address" style={{width:"340px"}} value={this.state.delivery_address} readOnly/>
                            </div>
                        </div><br/>
                        <div class="form-group row" >
                            <label for="form-control-total_amount" class="col-4 form-label" style={{marginTop:"8px"}}>Total Amount</label>
                            <div class="col-6">
                                <input type="text" className="form-control addInput" id="form-control-total_amount" name="total_amount"  style={{width:"340px"}}value={"Rs."+this.state.total_amount} readOnly/>
                            </div>
                        </div><br/>
                        <div class="form-group row" >
                            <label for="form-control-total_amount" class="col-4 form-label" style={{marginTop:"8px"}}>Supplier</label>
                            <div class="col-6">
                                <input type="text" className="form-control addInput" id="form-control-total_amount" name="total_amount" style={{width:"340px"}} value={this.state.total_amount} readOnly/>
                            </div>
                        </div><br/>
                        <button type="submit" className="btn btn-primary btndata">Raise Order</button>
                    </form>
                </div>
            </div>
        )
    }
}
