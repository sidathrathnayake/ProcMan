/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Sidebar from "../Navigation/Accountant_Sidebar";
import card1 from "../../images/admincard1.png";
import card2 from "../../images/acccard1.png";
export default class Accountant_Home extends Component {
  render() {
    return (
      <div>
        <div className="page-head">
          <Sidebar />
          <div className="page-header">
            <h1>
              <a href="#">
                <i className="fa fa-home"></i> &nbsp;&nbsp;Welcome
              </a>
            </h1>
          </div>
        </div>

        <div className="cards-container" style={{marginTop: "3%"}}>
          <div className="cards">
            <a href="/vieworderaccountant">
              <div className="cards-body" >
                <div className="card-container">
                  <img className="card-image" src={card1} alt="Card" />
                </div>
                <div className="card-details">
                  <h3>Delivered Orders</h3>
                  <p>Handle delivered order details.</p>
                </div>
              </div>
            </a>

            <a href="/viewpayment">
              <div className="cards-body">
                <div className="card-container">
                  <img className="card-image" src={card2} alt="Card" />
                </div>
                <div className="card-details">
                  <h3>Payments</h3>
                  <p>Handle payment details.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
