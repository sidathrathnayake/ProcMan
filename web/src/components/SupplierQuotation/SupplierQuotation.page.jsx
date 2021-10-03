import React, { Component, lazy } from "react";
import "../../css/supplier_quotation/supplier_quotation.css";
import Sidebar from "../Navigation/Admin_Sidebar";
import TopVendors from "../SupplierQuotation/components/TopVendors.component";
import SupplierQuotationComponent from "./components/SupplierQuotation.component";

export default class SupplierQuotationPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ height: "100vh" }}>
        <div className="page-head">
          <Sidebar />
          <div className="page-header">
            <h1 style={{ textDecoration: "none" }}>
              <a href="#">
                <i className="fa fa-home"></i> &nbsp;&nbsp;Suppliers Quotation
              </a>
            </h1>
          </div>
        </div>
        <div className="container-fluid sup_content">
          <div className="sup_grid_item">
            <SupplierQuotationComponent />
          </div>
          <div className="sup_grid_item" style={{ border: "none" }}>
            <TopVendors />
          </div>
        </div>
      </div>
    );
  }
}
