/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import axios from "axios";
import Sidebar from "../Navigation/Welcome_Sidebar";
import logo from '../../images/adminlogin.png';

class Admin_Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adminEmail: "",
      adminPassword: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  adminLoginHandler = (e) => {
    e.preventDefault();

    const { adminEmail, adminPassword } = this.state;

    const data = {
      adminEmail: adminEmail,
      adminPassword: adminPassword,
    };

    axios.post("http://localhost:5000/admin/adminlogin", data).then((res) => {
      if (res.data.success) {
        localStorage.setItem("adminToken", res.data.token);
        localStorage.setItem("adminEmail", data.adminEmail);
        alert("Logedin successfully.");
        this.props.history.push("/adminhome");
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
                <i className="fa fa-user-shield"></i> &nbsp;&nbsp;Staff Login
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
                id="adminEmail"
                value={this.state.adminEmail}
                onChange={this.handleInputChange}
                name="adminEmail"
                placeholder="Enter Email"
                tabIndex={1}
                required
              ></input>
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="password"
                id="adminPassword"
                value={this.state.adminPassword}
                onChange={this.handleInputChange}
                name="adminPassword"
                placeholder="Enter Password"
                tabIndex={2}
                required
              ></input>
            </div>

            <div>
              <button
                type="submit"
                onClick={this.adminLoginHandler}
                className="btn btn-primary btndata"
                tabIndex={3}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Admin_Login;
