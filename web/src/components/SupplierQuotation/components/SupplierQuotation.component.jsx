import React, {Component} from 'react';
import axios from "axios";
export default class SupplierQuotationComponent extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div className="supplier_quot_table">
                    <table className="table">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Supplier Name</th>
                            <th scope="col">Total Purchase</th>
                            <th scope="col">Amount Spend</th>
                            <th scope="col">Rating</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Supplier Name</th>
                            <th scope="col">Total Purchase</th>
                            <th scope="col">Amount Spend</th>
                            <th scope="col">Rating</th>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

