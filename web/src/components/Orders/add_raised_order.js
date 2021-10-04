import React, { Component } from 'react'
import Sidebar from '../Navigation/Sidebar';
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
        this.onSupplierChange = this.onSupplierChange.bind(this);
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
    
    onSupplierChange(e) {
        this.setState({ supplierName: e.value });
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
            window.location = '/adminViewOrder'
            alert('Order successfully raised!!!')
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
                <div className="adminhome-container" style={{backgroundColor:'rgba(0,0,0,0.25)'}}>
                    <div className="adminnav">
                        <h1>
                            <a href="#">
                                <i className="fa fa-coins"></i> &nbsp;&nbsp;Add To Raised Orders
                            </a>
                        </h1>
                    
                    </div>
                    <div>
                        <div className="raisedOrderAddCont" style={{ marginTop: "1%",marginBottom: "1%" , overflow:"visible"  }}>
                            <form style={{padding:'20px'}} onSubmit={this.onSubmit}>
                                <div class="form-group row" >
                                    <label for="form-control-order_id" class="col-4 form-label">Order Id</label>
                                    <div class="col-6">
                                        <input type="text" className="form-control addInput" id="form-control-order_id" name="order_id" value={this.state.order_id} readOnly/>
                                    </div>
                                </div><br/>
                                <div class="form-group row" >
                                    <label for="form-control-shippingAddress" class="col-4 form-label">Item Name</label>
                                    <div class="col-6">
                                        <input type="text" className="form-control addInput" id="form-control-item_name" name="item_name" value={this.state.item_name} readOnly/>
                                    </div>
                                </div><br/>
                                <div class="form-group row" >
                                    <label for="form-control-measuring_unit" class="col-4 form-label">Measuring Unit</label>
                                    <div class="col-6">
                                        <input type="text" className="form-control addInput" id="form-control-measuring_unit" name="measuring_unit" value={this.state.measuring_unit} readOnly/>
                                    </div>
                                </div><br/>
                                <div class="form-group row" >
                                    <label for="form-control-required_quantities" class="col-4 form-label">Required Quantities</label>
                                    <div class="col-6">
                                        <input type="text" className="form-control addInput" id="form-control-required_quantities" name="required_quantities" value={this.state.required_quantities} readOnly/>
                                    </div>
                                </div><br/>
                                <div class="form-group row" >
                                    <label for="form-control-delivery_address" class="col-4 form-label">Delivery Address</label>
                                    <div class="col-6">
                                        <input type="text" className="form-control addInput" id="form-control-delivery_address" name="delivery_address" value={this.state.delivery_address} readOnly/>
                                    </div>
                                </div><br/>
                                <div class="form-group row" >
                                    <label for="form-control-total_amount" class="col-4 form-label">Total Amount</label>
                                    <div class="col-6">
                                        <input type="text" className="form-control addInput" id="form-control-total_amount" name="total_amount" value={"Rs."+this.state.total_amount} readOnly/>
                                    </div>
                                </div><br/>
                                <div class="form-group row" >
                                    <label for="form-control-total_amount" class="col-4 form-label">Supplier</label>
                                    <div class="col-6">
                                        <input type="text" className="form-control addInput" id="form-control-total_amount" name="total_amount" value={this.state.total_amount} readOnly/>
                                    </div>
                                </div><br/>
                                <button type="submit">Raise Order</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
