/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Sidebar from "../Navigation/Welcome_Sidebar";
import card1 from "../../images/welcomecard1.png";
import card2 from "../../images/welcomecard2.png";
import card3 from "../../images/welcomecard3.png";
import card4 from "../../images/welcomecard4.png";

export default class Welcome extends Component {
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
            <a href="/adminlogin">
              <div className="cards-body">
                <div className="card-container">
                  <img className="card-image" src={card1} alt="Card" />
                </div>
                <div className="card-details">
                  <h3>Staff Login</h3>
                  <p>Click here to login.</p>
                </div>
              </div>
            </a>

            <a href="/accountantlogin">
              <div className="cards-body">
                <div className="card-container">
                  <img className="card-image" src={card2} alt="Card" />
                </div>
                <div className="card-details">
                  <h3>Accountant Login</h3>
                  <p>Click here to login.</p>
                </div>
              </div>
            </a>

            <a href="/supplierapply">
              <div className="cards-body">
                <div className="card-container">
                  <img className="card-image" src={card3} alt="Card" />
                </div>
                <div className="card-details">
                  <h3>Apply To Be Supplier</h3>
                  <p>Fill the form if you wants to be a supplier.</p>
                </div>
              </div>
            </a>

            <a href="#">
              <div className="cards-body">
                <div className="card-container">
                  <img className="card-image" src={card4} alt="Card" />
                </div>
                <div className="card-details">
                  <h3>Our Sites</h3>
                  <p>View our current working sites.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
