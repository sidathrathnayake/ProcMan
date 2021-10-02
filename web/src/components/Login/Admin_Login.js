import React, {Component} from 'react';
import axios from 'axios';

class Admin_Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            adminEmail: "",
            adminPassword: "",
        }
    }
    
    handleInputChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })

    }


    adminLoginHandler = (e) => {
        e.preventDefault();

        const {adminEmail, adminPassword} = this.state;

        const data = {
            adminEmail: adminEmail,
            adminPassword: adminPassword
        }

        axios.post("http://localhost:5000/admin/adminlogin", data).then((res) => {
            if (res.data.success) {
                localStorage.setItem("adminToken", res.data.token);
                localStorage.setItem("adminEmail", data.adminEmail);
                alert('Logedin successfully.')
                this.props.history.push('/adminhome');
            } else {
                alert('Email or password Incorrect.');
            }
        })

    }


    adminForgotpasswordHandler = async (e) => {
        e.preventDefault();

        const {adminEmail} = this.state;

        const data = {
            adminEmail: adminEmail
        }

        await axios.post("http://localhost:5000/admin/adminforgotpassword", data).then((res) => {

            if (res.data.success) {
                this.setState(data.data)
                alert('Email has been sent')
                this.props.history.push('/adminlogin');
            }

        })


    }

    render() {
        return (
            <div>
                            <div className="form-container">
                                <form className="form-data" method="POST">
                                    <h1>Sign in</h1><br/><br/>

                                    <div className="form-group">
                                        <i className="fas fa-user"></i>
                                        <input
                                            type="text"
                                            id="adminEmail"
                                            value={this.state.adminEmail}
                                            onChange={this.handleInputChange}
                                            name="adminEmail"
                                            placeholder="Enter Email"
                                            tabIndex={1}
                                            required>
                                        </input>
                                    </div>

                                    <div className="form-group">
                                        <i className="fas fa-lock"></i>
                                        <input
                                            type="password"
                                            id="adminPassword"
                                            value={this.state.adminPassword}
                                            onChange={this.handleInputChange}
                                            name="adminPassword"
                                            placeholder="Enter Password"
                                            tabIndex={2}
                                            required>
                                        </input>
                                    </div>

                                    <div>
                                        <button type="submit" onClick={this.adminLoginHandler}
                                                className="btn btn-primary" tabIndex={3}>Login
                                        </button>
                                    </div>
                                    <a className="text-right" href="/accountantlogin">Are you an accountant? Sign in</a>
                                </form>
                            </div>
                            </div>

                        
        );
    }
}

export default Admin_Login;