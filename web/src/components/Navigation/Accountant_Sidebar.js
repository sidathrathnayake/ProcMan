/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect, Component } from 'react';
import logo from '../../images/procman.png';
import axios from 'axios';
import {Redirect, withRouter} from 'react-router-dom';

const  Accountant_Sidebar = ({ history}) =>  {


    const [sidebar, setSidebar] = useState(false);

    const openSidebar = () => setSidebar(!sidebar);
   
    
    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");

    useEffect(() => {
        if(!localStorage.getItem("accountantToken")){
            history.push('/');
        }
    

    const fetchPrivateData = async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accountantToken")}`
            }
        }

        try {
            const {data} = await axios.get("http://localhost:5000/accountant", config);
            
        } catch (error) {
            localStorage.removeItem("accountantToken");
            history.push('/');
        }
    }

    fetchPrivateData();
}, [ history ]);   

const accountantLogoutHandler = () =>{
    localStorage.removeItem("accountantToken");
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
                        <li><a href="/accountanthome"><i className="fa fa-home"></i>&nbsp;&nbsp;Home</a></li>
                        <li><a href="#"><i className="fa fa-user-shield"></i>&nbsp;&nbsp;Staff Login</a></li>
                        <li><a href="#"><i className="fa fa-coins"></i>&nbsp;&nbsp;Accountant Login</a></li>
                        <li><a href="#"><i className="fas fa-truck"></i>&nbsp;&nbsp;Apply to be a supplier</a></li>
                        <li><a href="/payment"><i className="fas fa-city"></i>&nbsp;&nbsp;Our Sites</a></li>
                        <li><a href="#"  onClick={accountantLogoutHandler} ><i className="fa fa-power-off"></i>Sign Out</a></li>
                    </ul>
                </nav>


            </>
    )
}

export default  withRouter(Accountant_Sidebar);