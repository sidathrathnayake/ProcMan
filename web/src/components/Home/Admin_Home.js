/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Sidebar from '../Navigation/Admin_Sidebar';

export default class Admin_Home extends Component {
    render() {
        return (
            <div>
                <div className="page-head">
                <Sidebar/>
                <div className="page-header"><h1><a href="#"><i className="fa fa-home"></i>  &nbsp;&nbsp;Welcome</a></h1></div>
                </div>
            </div>
        )
    }
}