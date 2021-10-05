/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import axios from "axios";
import Sidebar from "../Navigation/Accountant_Sidebar";
import TableScrollbar from 'react-table-scrollbar';

export default class View_Deliver extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          deliver: [],
        };
      }
    
      componentDidMount() {
        this.retrive_delivers();
      }
    
      async retrive_delivers() {
        await axios.get("http://localhost:5000/deliver/delivers").then((res) => {
          if (res.data.success) {
            this.setState({
                deliver: res.data.deliver,
            });
          }
          console.log(this.state.deliver);
        });
      }
    
      onDelete = (id) => {
        axios.delete(`http://localhost:5000/deliver/deletedeliver/${id}`).then((res) => {
          alert("Deleted Successfully...!");
          this.retrive_applies();
        });
      };
    
      filterData(deliver, searchKey) {
        const result = deliver.filter(
          (deliver) =>
          deliver.supplierEmail.toLowerCase().includes(searchKey)
        );
    
        this.setState({ deliver: result });
      }
    
      handleSearch = (e) => {
        const searchKey = e.currentTarget.value;
        axios.get("http://localhost:5000/deliver/delivers").then((res) => {
          if (res.data.success) {
            this.filterData(res.data.deliver, searchKey);
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
                <i className="fas fa-truck"></i> &nbsp;&nbsp;Deliveries
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
            href="payment"
            className="btn btn-success"
            style={{ marginRight: "1%" }}
          >
            Payment
          </a>
          </div>
          <div className="table-container">
            <TableScrollbar rows={9}>
            <table>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">deliver ID</th>
                  <th scope="col">email</th>
                  <th scope="col">order ID</th>
                  <th scope="col">item name</th>
                  <th scope="col">site name</th>
                  <th scope="col">ordered</th>
                  <th scope="col">Address</th>
                  <th scope="col">damaged</th>
                  <th scope="col">recieved</th>
                  <th scope="col">total amount</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.deliver.map((deliver, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{deliver._id}</td>
                    <td>{deliver.supplierEmail}</td>
                    <td>{deliver.order_id}</td>
                    <td>{deliver.itemName}</td>
                    <td>{deliver.site_name}</td>
                    <td>{deliver.required_quantities}</td>
                    <td>{deliver.delivery_address}</td>
                    <td>{deliver.damaged}</td>
                    <td>{deliver.recieved_quantities}</td>
                    <td>{deliver.total_amount}</td>
                    <td>
                      <a
                        className="btn btn-danger"
                        href="#"
                        onClick={() => this.onDelete(deliver._id)}
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
