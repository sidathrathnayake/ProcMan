/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from "axios";
import Sidebar from "../Navigation/Admin_Sidebar";
import TableScrollbar from "react-table-scrollbar";

export default class View_Sitemanager extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          sitemanager: [],
        };
      }
    
      componentDidMount() {
        this.retrive_sitemanagers();
      }
    
      async retrive_sitemanagers() {
        await axios.get("http://localhost:5000/sitemanager/sitemanagers").then((res) => {
          if (res.data.success) {
            this.setState({
              sitemanager: res.data.sitemanager,
            });
          }
          console.log(this.state.sitemanager);
        });
      }
    
      onDelete = (id) => {
        axios
          .delete(`http://localhost:5000/sitemanager/deletesitemanager/${id}`)
          .then((res) => {
            alert("Deleted Successfully...!");
            this.retrive_sitemanagers();
          });
      };
    
      filterData(sitemanager, searchKey) {
        const result = sitemanager.filter(
          (sitemanager) =>
            sitemanager.sitemanagerName.toLowerCase().includes(searchKey) ||
            sitemanager.site.toLowerCase().includes(searchKey)
        );
    
        this.setState({ sitemanager: result });
      }
    
      handleSearch = (e) => {
        const searchKey = e.currentTarget.value;
        axios.get("http://localhost:5000/sitemanager/sitemanagers").then((res) => {
          if (res.data.success) {
            this.filterData(res.data.sitemanager, searchKey);
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
                <i className="fas fa-city"></i> &nbsp;&nbsp;site managers
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
            href="/sitemanagerregister"
            className="btn btn-success"
            style={{ marginRight: "1%" }}
          >
            Add Site Manager
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
                  <th scope="col">site</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.sitemanager.map((sitemanager, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{sitemanager.sitemanagerName}</td>
                    <td>{sitemanager.sitemanagerEmail}</td>
                    <td>{sitemanager.sitemanagerPhone}</td>
                    <td>{sitemanager.site}</td>
                    <td>
                      <a
                        className="btn btn-danger"
                        href="#"
                        onClick={() => this.onDelete(sitemanager._id)}
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
