/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from "axios";
import Sidebar from "../Navigation/Admin_Sidebar";

export default class Accountant_Register extends Component {
  
    constructor(props){
        super(props);
        
        this.state = {
            accountantName:"",
            accountantEmail:"",
            accountantPassword: "",
        }
    }
    
    handleInputChange = (e) => {
        const {name, value} = e.target;
    
        this.setState({
            ...this.state,
            [name]: value
        })
        
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        
        const {accountantName, accountantEmail,accountantPassword }= this.state;
            
        const data = {
            accountantName: accountantName, 
            accountantEmail: accountantEmail,
            accountantPassword:accountantPassword,
        }
        axios.post('http://localhost:5000/accountant/accountantregister', data).then((res) =>{
            if(res.data.success){
                this.setState(
                    {   
                      accountantName:"",
                      accountantEmail:"",
                      accountantPassword: "",
                    }
                )
                alert('Registered successfully!')
                this.props.history.push('/viewaccountant');
            }
    
            else{
                alert('Unable to register. Try again later.')
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
                <i className="fa fa-coins"></i> &nbsp;&nbsp;Register Accountant
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
                id="accountantName"
                value={this.state.accountantName}
                onChange={this.handleInputChange}
                name="accountantName"
                placeholder="Enter name"
                tabIndex={1}
                required
              ></input>
            </div>
            
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                id="accountantEmail"
                value={this.state.accountantEmail}
                onChange={this.handleInputChange}
                name="accountantEmail"
                placeholder="Enter email"
                tabIndex={2}
                required
              ></input>
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="password"
                id="accountantPassword"
                value={this.state.accountantPassword}
                onChange={this.handleInputChange}
                name="accountantPassword"
                placeholder="Enter password"
                tabIndex={3}
                required
              ></input>
            </div>


            <div>
              <button
                type="submit"
                onClick={this.onSubmit}
                className="btn btn-primary btndata"
                tabIndex={4}
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
