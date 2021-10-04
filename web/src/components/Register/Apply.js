/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import axios from "axios";
import logo from '../../images/supplierapply.png';
import Sidebar from "../Navigation/Welcome_Sidebar";

class Apply extends Component {
  constructor(props){
    super(props);
    
    this.state = {
        supplierName:"",
        supplierEmail:"",
        supplierPhone: "",
        itemName: "",
        itemPrice: "",
        itemScale: "",
    }
}

handleInputChange = (e) => {
    const {name, value} = e.target;

    this.setState({
        ...this.state,
        [name]: value
    })
    
}

applyHandler = (e) => {
    e.preventDefault();
    
    const {supplierName, supplierEmail,supplierPhone,itemName,itemPrice,itemScale }= this.state;
        
    const data = {
        supplierName: supplierName, 
        supplierEmail: supplierEmail,
        supplierPhone:supplierPhone,
        itemName:itemName,
        itemPrice:itemPrice,
        itemScale:itemScale,
    }
    axios.post('http://localhost:5000/apply/apply', data).then((res) =>{
        if(res.data.success){
            this.setState(
                {   
                  supplierName:"",
                  supplierEmail:"",
                  supplierPhone: "",
                  itemName: "",
                  itemPrice: "",
                  itemScale: "",
                }
            )
            alert('Your data has been saved. We will inform you if we will select you. Thank you!')
            this.props.history.push('/');
        }

        else{
            alert('Unable to apply your details. Try again later.')
        }
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
                <i className="fa fa-supplier-shield"></i> &nbsp;&nbsp;Apply to be a supplier
              </a>
            </h1>
          </div>
        </div>

        <div className="form-container">
          <form className="form-data" method="POST">
          <img className="form-image" src={logo} alt="Logo"/>
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

            <div>
              <button
                type="submit"
                onClick={this.applyHandler}
                className="btn btn-primary btndata"
                tabIndex={7}
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Apply;


