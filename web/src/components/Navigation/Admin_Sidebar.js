/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect, Component } from 'react'

export default function Admin_Sidebar() {


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
    
                    <ul onClick={openSidebar}>
                        <li><a href="/adminhome"><i className="fa fa-home"></i>&nbsp;&nbsp;Home</a></li>
                        <li><a href="#"><i className="fa fa-user-shield"></i>&nbsp;&nbsp;Staff Login</a></li>
                        <li><a href="/viewaccountant"><i className="fa fa-coins"></i>&nbsp;&nbsp;Accountants</a></li>
                        <li><a href="/viewsupplier"><i className="fas fa-truck"></i>&nbsp;&nbsp;Suppliers</a></li>
                        <li><a href="/viewsitemanager"><i className="fas fa-city"></i>&nbsp;&nbsp;Site Managers</a></li>
                    </ul>
                </nav>


            </>
    )
}

