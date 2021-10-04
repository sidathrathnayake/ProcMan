/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from "axios";
import Sidebar from "../Navigation/Admin_Sidebar";
import TableScrollbar from "react-table-scrollbar";

export default class View_Accountant extends Component {
   
    constructor(props) {
        super(props);
    
        this.state = {
          accountant: [],
        };
      }
    
      componentDidMount() {
        this.retrive_accountants();
      }
    
      async retrive_accountants() {
        await axios.get("http://localhost:5000/accountant/accountants").then((res) => {
          if (res.data.success) {
            this.setState({
              accountant: res.data.accountant,
            });
          }
          console.log(this.state.accountant);
        });
      }
    
      onDelete = (id) => {
        axios
          .delete(`http://localhost:5000/accountant/deleteaccountant/${id}`)
          .then((res) => {
            alert("Deleted Successfully...!");
            this.retrive_accountants();
          });
      };
    
      filterData(accountant, searchKey) {
        const result = accountant.filter(
          (accountant) =>
            accountant.accountantName.toLowerCase().includes(searchKey) ||
            accountant.site.toLowerCase().includes(searchKey)
        );
    
        this.setState({ accountant: result });
      }
    
      handleSearch = (e) => {
        const searchKey = e.currentTarget.value;
        axios.get("http://localhost:5000/accountant/accountants").then((res) => {
          if (res.data.success) {
            this.filterData(res.data.accountant, searchKey);
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
                <i className="fas fa-coins"></i> &nbsp;&nbsp;Accountants
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
          <a
            href="/accountantregister"
            className="btn btn-success"
            style={{ marginRight: "1%" }}
          >
            Add Accountant
          </a>
        </div>
        <div className="table-container">
          <TableScrollbar rows={9}>
            <table>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">name</th>
                  <th scope="col">email</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.accountant.map((accountant, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{accountant.accountantName}</td>
                    <td>{accountant.accountantEmail}</td>
                    <td>
                      <a
                        className="btn btn-danger"
                        href="#"
                        onClick={() => this.onDelete(accountant._id)}
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
