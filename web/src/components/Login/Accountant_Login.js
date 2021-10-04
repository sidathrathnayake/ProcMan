/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import axios from "axios";
import Sidebar from "../Navigation/Welcome_Sidebar";
import logo from '../../images/accountantlogin.png';

export default class Accountant_Login extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          accountantEmail: "",
          accountantPassword: "",
        };
      }
    
      handleInputChange = (e) => {
        const { name, value } = e.target;
    
        this.setState({
          ...this.state,
          [name]: value,
        });
      };
    
      accountantLoginHandler = (e) => {
        e.preventDefault();
    
        const { accountantEmail, accountantPassword } = this.state;
    
        const data = {
          accountantEmail: accountantEmail,
          accountantPassword: accountantPassword,
        };
    
        axios.post("http://localhost:5000/accountant/accountantlogin", data).then((res) => {
          if (res.data.success) {
            localStorage.setItem("accountantToken", res.data.token);
            localStorage.setItem("accountantEmail", data.accountantEmail);
            alert("Logedin successfully.");
            this.props.history.push("/accountanthome");
          } else {
            alert("Email or password Incorrect.");
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
                <i className="fa fa-coins"></i> &nbsp;&nbsp;Accountant Login
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
                id="accountantEmail"
                value={this.state.accountantEmail}
                onChange={this.handleInputChange}
                name="accountantEmail"
                placeholder="Enter Email"
                tabIndex={1}
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
                placeholder="Enter Password"
                tabIndex={2}
                required
              ></input>
            </div>

            <div>
              <button
                type="submit"
                onClick={this.accountantLoginHandler}
                className="btn btn-primary btndata"
                tabIndex={3}
              >
                Login
              </button>
            </div>
          </form>
        </div>
            </div>
        )
    }
}
