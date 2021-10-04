/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import axios from "axios";
import Sidebar from "../Navigation/Admin_Sidebar";
import TableScrollbar from 'react-table-scrollbar';

export default class View_Apply extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          apply: [],
        };
      }
    
      componentDidMount() {
        this.retrive_applies();
      }
    
      async retrive_applies() {
        await axios.get("http://localhost:5000/apply/applies").then((res) => {
          if (res.data.success) {
            this.setState({
                apply: res.data.apply,
            });
          }
          console.log(this.state.apply);
        });
      }
    
      onDelete = (id) => {
        axios.delete(`http://localhost:5000/apply/deleteapply/${id}`).then((res) => {
          alert("Deleted Successfully...!");
          this.retrive_applies();
        });
      };
    
      filterData(apply, searchKey) {
        const result = apply.filter(
          (apply) =>
          apply.supplierName.toLowerCase().includes(searchKey) ||
          apply.itemName.toLowerCase().includes(searchKey)
        );
    
        this.setState({ apply: result });
      }
    
      handleSearch = (e) => {
        const searchKey = e.currentTarget.value;
        axios.get("http://localhost:5000/apply/applies").then((res) => {
          if (res.data.success) {
            this.filterData(res.data.apply, searchKey);
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
                <i className="fas fa-truck"></i> &nbsp;&nbsp;Supplier Applies
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
                  <th scope="col">name</th>
                  <th scope="col">email</th>
                  <th scope="col">contact no</th>
                  <th scope="col">item name</th>
                  <th scope="col">item price</th>
                  <th scope="col">scale type</th>
                  <th scope="col">Approve</th>
                  <th scope="col">Reject</th>
                </tr>
              </thead>
              <tbody>
                {this.state.apply.map((apply, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{apply.supplierName}</td>
                    <td>{apply.supplierEmail}</td>
                    <td>{apply.supplierPhone}</td>
                    <td>{apply.itemName}</td>
                    <td>{apply.itemPrice}</td>
                    <td>{apply.itemScale}</td>
                    <td>
                    <a className="btn btn-warning" href={`/supplierregister/${apply._id}`}>
                                Approve
                            </a>
                      
                      
                    </td>
                    <td>
                      <a
                        className="btn btn-danger"
                        href="#"
                        onClick={() => this.onDelete(apply._id)}
                      >
                         Reject
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
