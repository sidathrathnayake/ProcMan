/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from "axios";
import Sidebar from "../Navigation/Admin_Sidebar";

export default class SiteManager_Register extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            sitemanagerName:"",
            sitemanagerEmail:"",
            sitemanagerPhone:"",
            site:"",
            sitemanagerPassword: "",
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
        
        const {sitemanagerName, sitemanagerEmail,sitemanagerPhone,site,sitemanagerPassword }= this.state;
            
        const data = {
            sitemanagerName: sitemanagerName, 
            sitemanagerEmail: sitemanagerEmail,
            sitemanagerPhone:sitemanagerPhone,
            sitemanagerPassword:sitemanagerPassword,
            site:site,
        }
        axios.post('http://localhost:5000/sitemanager/sitemanagerregister', data).then((res) =>{
            if(res.data.success){
                this.setState(
                    {   
                      sitemanagerName:"",
                      sitemanagerEmail:"",
                      sitemanagerPhone:"",
            site:"",
                      sitemanagerPassword: "",
                    }
                )
                alert('Registered successfully!')
                this.props.history.push('/viewsitemanager');
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
                <i className="fa fa-coins"></i> &nbsp;&nbsp;Register Site Manager
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
                id="sitemanagerName"
                value={this.state.sitemanagerName}
                onChange={this.handleInputChange}
                name="sitemanagerName"
                placeholder="Enter name"
                tabIndex={1}
                required
              ></input>
            </div>
            
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                id="sitemanagerEmail"
                value={this.state.sitemanagerEmail}
                onChange={this.handleInputChange}
                name="sitemanagerEmail"
                placeholder="Enter email"
                tabIndex={2}
                required
              ></input>
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="tel"
                id="sitemanagerPhone"
                value={this.state.sitemanagerPhone}
                onChange={this.handleInputChange}
                name="sitemanagerPhone"
                placeholder="Enter contact number"
                tabIndex={3}
                required
              ></input>
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="text"
                id="site"
                value={this.state.site}
                onChange={this.handleInputChange}
                name="site"
                placeholder="Enter site"
                tabIndex={4}
                required
              ></input>
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="password"
                id="sitemanagerPassword"
                value={this.state.sitemanagerPassword}
                onChange={this.handleInputChange}
                name="sitemanagerPassword"
                placeholder="Enter password"
                tabIndex={5}
                required
              ></input>
            </div>


            <div>
              <button
                type="submit"
                onClick={this.onSubmit}
                className="btn btn-primary btndata"
                tabIndex={6}
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
