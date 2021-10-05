import React, { Component } from 'react'
import Sidebar from '../Navigation/Admin_Sidebar';
import axios from 'axios';

import TableScrollbar from 'react-table-scrollbar';

export default class View_Approved_Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
          orders: []
        }
    }
    
    componentDidMount() { 
        axios.get('http://localhost:5000/purchase-order/get-approved-orders')
        .then(response => {
          this.setState({ orders: response.data.data })
        })
    }

    // search() {
    //     var input, filter, table, tr, td, i, txtValue;
    //     input = document.getElementById("orderSearch");
    //     filter = input.value.toUpperCase();
    //     table = document.getElementById("orderTable");
    //     tr = table.getElementsByTagName("tr");
    //     for (i = 0; i < tr.length; i++) {
    //         td = tr[i].getElementsByTagName("td")[0];
    //         if (td) {
    //         txtValue = td.textContent || td.innerText;
    //         if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //             tr[i].style.display = "";
    //         } else {
    //             tr[i].style.display = "none";
    //         }
    //         }       
    //     }
    //   }
    

    render() {
        return (
            <div>
                <div className="page-head">
                    <Sidebar/>
                    <div className="page-header">
                        <h1>
                            <a href="/userdetails">
                                <i className="fa fa-coins"></i> &nbsp;&nbsp;All Approved Orders
                            </a>
                        </h1>
                    </div>
                </div>
                <div className="search-add">
                    <div class="table-search">
                        <input class="form-control" type="search" id="orderSearch" onKeyUp={this.search} placeholder="Search by Order ID"/>    
                    </div>
                </div>
                <div className="table-container">
                    <TableScrollbar rows={10}>
                        <table id="orderTable">
                            <thead>
                                <tr>
                                    <th>Order ID</th>    
                                    <th>Item Name</th>
                                    <th>Site Name</th>
                                    <th>Priority</th>
                                    <th>Required Quantities</th>
                                    <th>Delivery Address</th>
                                    <th>Total Amount</th>
                                    <th>Raise Order</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.orders.map((item, index) => (
                                    <tr>
                                        <td>
                                            <div>
                                                {item.order_id}
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                {item.item_name}
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                {item.site_name}
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                {item.priority}
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                {item.required_quantities}+" "+{item.measuring_unit}
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                {item.delivery_address}
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                {item.total_amount}
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <button className="btn btn-success">Raise Order</button>
                                            </div>
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
