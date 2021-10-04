/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import axios from "axios";
import Sidebar from "../Navigation/Admin_Sidebar";
import TableScrollbar from "react-table-scrollbar";

export default class View_Supplier extends Component {
  constructor(props) {
    super(props);

    this.state = {
      supplier: [],
    };
  }

  componentDidMount() {
    this.retrive_suppliers();
  }

  async retrive_suppliers() {
    await axios.get("http://localhost:5000/supplier/suppliers").then((res) => {
      if (res.data.success) {
        this.setState({
          supplier: res.data.supplier,
        });
      }
      console.log(this.state.supplier);
    });
  }

  onDelete = (id) => {
    axios
      .delete(`http://localhost:5000/supplier/deletesupplier/${id}`)
      .then((res) => {
        alert("Deleted Successfully...!");
        this.retrive_suppliers();
      });
  };

  filterData(supplier, searchKey) {
    const result = supplier.filter(
      (supplier) =>
        supplier.supplierName.toLowerCase().includes(searchKey) ||
        supplier.itemName.toLowerCase().includes(searchKey) ||
        supplier.supplierRating.toLowerCase().includes(searchKey)
    );

    this.setState({ supplier: result });
  }

  handleSearch = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get("http://localhost:5000/supplier/suppliers").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.supplier, searchKey);
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
                <i className="fas fa-truck"></i> &nbsp;&nbsp;Suppliers
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
            href="/viewapply"
            className="btn btn-success"
            style={{ marginRight: "1%" }}
          >
            Supplier Applies
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
                  <th scope="col">contact no</th>
                  <th scope="col">item name</th>
                  <th scope="col">item price</th>
                  <th scope="col">scale type</th>
                  <th scope="col">Total Items</th>
                  <th scope="col">Money Spend</th>
                  <th scope="col">Ratings</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.supplier.map((supplier, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{supplier.supplierName}</td>
                    <td>{supplier.supplierEmail}</td>
                    <td>{supplier.supplierPhone}</td>
                    <td>{supplier.itemName}</td>
                    <td>{supplier.itemPrice}</td>
                    <td>{supplier.itemScale}</td>
                    <td>{supplier.totalItemCount}</td>
                    <td>{supplier.totalSpend}</td>
                    <td>{supplier.supplierRating}</td>
                    <td>
                      <a
                        className="btn btn-danger"
                        href="#"
                        onClick={() => this.onDelete(supplier._id)}
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
    );
  }
}
