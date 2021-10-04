/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import axios from "axios";
import Sidebar from "../Navigation/Admin_Sidebar";

export default class Supplier_Register extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            supplierName:"",
            supplierEmail:"",
            supplierPhone: "",
            itemName: "",
            itemPrice: "",
            itemScale: "",
            totalItemCount: "",
            totalSpend: "",
            supplierRating: "",
            supplierPassword: "",

        }
    }
    
    handleInputChange = (e) => {
        const {name, value} = e.target;
    
        this.setState({
            ...this.state,
            [name]: value
        })
        
    }
    
    componentDidMount(){
        const applyid = this.props.match.params.id;
        localStorage.setItem('applyid',applyid);
        axios.get(`http://localhost:5000/apply/applydata/${applyid}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    supplierName: res.data.apply.supplierName,
                    supplierEmail: res.data.apply.supplierEmail,
                    supplierPhone: res.data.apply.supplierPhone,
                    itemName: res.data.apply.itemName,
                    itemPrice: res.data.apply.itemPrice,
                    itemScale: res.data.apply.itemScale,
    
                });
            }
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        
        const {supplierName, supplierEmail,supplierPhone,itemName,itemPrice,itemScale,totalItemCount,totalSpend,supplierRating,supplierPassword }= this.state;
            
        const data = {
            supplierName: supplierName, 
            supplierEmail: supplierEmail,
            supplierPhone:supplierPhone,
            itemName:itemName,
            itemPrice:itemPrice,
            itemScale:itemScale,
            totalItemCount: totalItemCount,
            totalSpend: totalSpend,
            supplierRating: supplierRating,
            supplierPassword: supplierPassword,
        }
        axios.post('http://localhost:5000/supplier/supplierregister', data).then((res) =>{
            if(res.data.success){
                this.setState(
                    {   
                      supplierName:"",
                      supplierEmail:"",
                      supplierPhone: "",
                      itemName: "",
                      itemPrice: "",
                      itemScale: "",
                      totalItemCount: "",
                      totalSpend: "",
                      supplierRating: "",
                      supplierPassword: "",
                    }
                )
                this.onDelete( localStorage.getItem('applyid') );
                alert('Registered Successfully')
                this.props.history.push('/viewapply');

                
            }
    
            else{
                alert('Unable to apply. Try again later.')
            }
        });
    };


    onDelete = (id) => {
      axios.delete(`http://localhost:5000/apply/deleteapply/${id}`).then((res) => {
      });
    };

    render() {
        return (
            <div>
                <div className="page-head">
          <Sidebar />
          <div className="page-header">
            <h1>
              <a href="#">
                <i className="fas fa-truck"></i> &nbsp;&nbsp;Apply to be a supplier
              </a>
            </h1>
          </div>
        </div>

        <div className="form-container">
          <form className="form-data" method="POST">

          <div className="form-group">
              <input
                className="form-control"
                type="text"
                id="supplierName"
                value={this.state.supplierName}
                onChange={this.handleInputChange}
                name="supplierName"
                placeholder="Enter name"
                tabIndex={1}
                required
                readOnly
              ></input>
            </div>
            
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                id="supplierEmail"
                value={this.state.supplierEmail}
                onChange={this.handleInputChange}
                name="supplierEmail"
                placeholder="Enter email"
                tabIndex={2}
                required
                readOnly
              ></input>
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="tel"
                id="supplierPhone"
                value={this.state.supplierPhone}
                onChange={this.handleInputChange}
                name="supplierPhone"
                placeholder="Enter contact number"
                pattern="[0-9]{10}"
                tabIndex={3}
                required
                readOnly
              ></input>
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="text"
                id="itemName"
                value={this.state.itemName}
                onChange={this.handleInputChange}
                name="itemName"
                placeholder="Enter item name you wants to supply"
                tabIndex={4}
                required
                readOnly
              ></input>
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="number"
                id="itemPrice"
                value={this.state.itemPrice}
                onChange={this.handleInputChange}
                name="itemPrice"
                placeholder="Enter item price"
                tabIndex={5}
                required
                readOnly
              ></input>
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="text"
                id="itemScale"
                value={this.state.itemScale}
                onChange={this.handleInputChange}
                name="itemScale"
                placeholder="Enter scale type"
                tabIndex={6}
                required
              ></input>
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="number"
                id="totalItemCount"
                value={this.state.totalItemCount}
                onChange={this.handleInputChange}
                name="totalItemCount"
                placeholder="Enter total item count"
                tabIndex={7}
                required
              ></input>
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="number"
                id="totalSpend"
                value={this.state.totalSpend}
                onChange={this.handleInputChange}
                name="totalSpend"
                placeholder="Enter money spend"
                tabIndex={8}
                required
              ></input>
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="number"
                id="supplierRating"
                value={this.state.supplierRating}
                onChange={this.handleInputChange}
                name="supplierRating"
                placeholder="Enter ratings"
                tabIndex={9}
                required
              ></input>
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="password"
                id="supplierPassword"
                value={this.state.supplierPassword}
                onChange={this.handleInputChange}
                name="supplierPassword"
                placeholder="Enter password"
                tabIndex={10}
                required
              ></input>
            </div>

            <div>
              <button
                type="submit"
                onClick={this.onSubmit}
                className="btn btn-primary btndata"
                tabIndex={11}
              >
                Register
              </button>
            </div>
          </form>
        </div>
            </div>
        )
    }
}
