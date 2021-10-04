/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Sidebar from "../Navigation/Admin_Sidebar";
import card1 from "../../images/admincard1.png";
import card2 from "../../images/admincard2.png";
import card3 from "../../images/admincard3.png";
import card4 from "../../images/admincard4.png";

export default class Admin_Home extends Component {
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

        <div className="cards-container" style={{marginTop: "10%"}}>
          <div className="cards">
            <a href="/vieworder">
              <div className="cards-body">
                <div className="card-container">
                  <img className="card-image" src={card1} alt="Card" />
                </div>
                <div className="card-details">
                  <h3>Orders</h3>
                  <p>Handle order details.</p>
                </div>
              </div>
            </a>

            <a href="/viewaccountant">
              <div className="cards-body">
                <div className="card-container">
                  <img className="card-image" src={card2} alt="Card" />
                </div>
                <div className="card-details">
                  <h3>Accountants</h3>
                  <p>Handle accountant details.</p>
                </div>
              </div>
            </a>

            <a href="/viewsupplier">
              <div className="cards-body">
                <div className="card-container">
                  <img className="card-image" src={card3} alt="Card" />
                </div>
                <div className="card-details">
                  <h3>Supplier</h3>
                  <p>Handle supplier details.</p>
                </div>
              </div>
            </a>

            <a href="/viewsitemanager">
              <div className="cards-body">
                <div className="card-container">
                  <img className="card-image" src={card4} alt="Card" />
                </div>
                <div className="card-details">
                  <h3>Site Manager</h3>
                  <p>Handle site manager details.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
