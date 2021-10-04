/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from "axios";
import Sidebar from "../Navigation/Accountant_Sidebar";
import TableScrollbar from "react-table-scrollbar";

export default class View_Payment extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          payment: [],
        };
      }
    
      componentDidMount() {
        this.retrive_payments();
      }
    
      async retrive_payments() {
        await axios.get("http://localhost:5000/payment/payments").then((res) => {
          if (res.data.success) {
            this.setState({
              payment: res.data.payment,
            });
          }
          console.log(this.state.payment);
        });
      }
    
      onDelete = (id) => {
        axios
          .delete(`http://localhost:5000/payment/deletepayment/${id}`)
          .then((res) => {
            alert("Deleted Successfully...!");
            this.retrive_payments();
          });
      };
    
      filterData(payment, searchKey) {
        const result = payment.filter(
          (payment) =>
            payment.supplierEmail.toLowerCase().includes(searchKey) ||
            payment.itemName.toLowerCase().includes(searchKey)
        );
    
        this.setState({ payment: result });
      }
    
      handleSearch = (e) => {
        const searchKey = e.currentTarget.value;
        axios.get("http://localhost:5000/payment/payments").then((res) => {
          if (res.data.success) {
            this.filterData(res.data.payment, searchKey);
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
                <i className="fas fa-coins"></i> &nbsp;&nbsp;Payments
              </a>
            </h1>
          </div>
        </div>
        <div className="search-add">
          <div className="table-search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearch}
            ></input>
          </div>
        </div>
        <div className="table-container">
          <TableScrollbar rows={9}>
            <table>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">email</th>
                  <th scope="col">order ID</th>
                  <th scope="col">item Name</th>
                  <th scope="col">Items in order</th>
                  <th scope="col">Final Payment</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.payment.map((payment, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{payment.supplierEmail}</td>
                    <td>{payment.orderID}</td>
                    <td>{payment.itemName}</td>
                    <td>{payment.orderItemCount}</td>
                    <td>{payment.orderPayment}</td>
                    <td>
                      <a
                        className="btn btn-danger"
                        href="#"
                        onClick={() => this.onDelete(payment._id)}
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableScrollbar>
        </div>
            </div>
        )
    }
}
