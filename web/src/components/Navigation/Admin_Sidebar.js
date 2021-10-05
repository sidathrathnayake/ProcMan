/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect, Component } from 'react';
import logo from '../../images/procman.png';
import axios from 'axios';
import {Redirect, withRouter} from 'react-router-dom';

const Admin_Sidebar = ({ history}) => {


    const [sidebar, setSidebar] = useState(false);

    const openSidebar = () => setSidebar(!sidebar);
   
    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");

    useEffect(() => {
        if(!localStorage.getItem("adminToken")){
            history.push('/');
        }
    

    const fetchPrivateData = async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("adminToken")}`
            }
        }

        try {
            const {data} = await axios.get("http://localhost:5000/admin", config);
            
        } catch (error) {
            localStorage.removeItem("adminToken");
            history.push('/');
        }
    }

    fetchPrivateData();
}, [ history ]);   

const adminLogoutHandler = () =>{
    localStorage.removeItem("adminToken");
    history.push('/');
}

    return (
        <>


                <div className="sidebar-slide">
                    <a href="#" onClick={openSidebar}>
                        <i className="fas fa-bars"></i>
                    </a>
                </div>
                
                <nav className={sidebar ? 'sidebar-nav active' : 'sidebar-nav'}>
                    <a href="#" className="sidebar-close" onClick={openSidebar}>
                        <i className="fas fa-times-circle"></i>
                    </a>
                    <div>
                    <img className="sidebar-image" src={logo} alt="Logo"/>
                    </div>
                    <ul onClick={openSidebar}>
                        <li><a href="/adminhome"><i className="fa fa-home"></i>&nbsp;&nbsp;Home</a></li>
                        <li><a href="#"><i className="fa fa-user-shield"></i>&nbsp;&nbsp;Staff Login</a></li>
                        <li><a href="/viewaccountant"><i className="fa fa-coins"></i>&nbsp;&nbsp;Accountants</a></li>
                        <li><a href="/viewsupplier"><i className="fas fa-truck"></i>&nbsp;&nbsp;Suppliers</a></li>
                        <li><a href="/viewsitemanager"><i className="fas fa-city"></i>&nbsp;&nbsp;Site Managers</a></li>
                        <li><a href="#"  onClick={adminLogoutHandler} ><i className="fa fa-power-off"></i>&nbsp;&nbsp;Sign Out</a></li>
                    </ul>
                </nav>


            </>
    )
}

export default withRouter(Admin_Sidebar);