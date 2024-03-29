/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect, Component } from 'react';
import logo from '../../images/procman.png';

export default function Welcome_Sidebar() {


    const [sidebar, setSidebar] = useState(false);

    const openSidebar = () => setSidebar(!sidebar);
   

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
                        <li><a href="/"><i className="fa fa-home"></i>&nbsp;&nbsp;Home</a></li>
                        <li><a href="/adminlogin"><i className="fa fa-user-shield"></i>&nbsp;&nbsp;Staff Login</a></li>
                        <li><a href="/accountantlogin"><i className="fa fa-coins"></i>&nbsp;&nbsp;Accountant Login</a></li>
                        <li><a href="/supplierapply"><i className="fas fa-truck"></i>&nbsp;&nbsp;Apply to be a supplier</a></li>
                        <li><a href="/oursites"><i className="fas fa-city"></i>&nbsp;&nbsp;Our Sites</a></li>
                    </ul>
                </nav>


            </>
    )
}

