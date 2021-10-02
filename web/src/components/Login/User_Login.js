// import React, {Component} from 'react';
// import axios from 'axios';
// import insert1 from '../../images/accountantlogin.svg';
// import insert2 from '../../images/accountantforgotpassword.svg';

// class Accountant_Login extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             accountantEmail: "",
//             accountantPassword: "",
//         }
//     }
//     handleInputChange = (e) => {
//         const {name, value} = e.target;

//         this.setState({
//             ...this.state,
//             [name]: value
//         })

//     }


//     accountantLoginHandler = (e) => {
//         e.preventDefault();

//         const {accountantEmail, accountantPassword} = this.state;

//         const data = {
//             accountantEmail: accountantEmail,
//             accountantPassword: accountantPassword
//         }
            
//         axios.post("http://localhost:5000/accountant/accountantlogin",data).then((res) =>{
//                 if(res.data.success){
//                     localStorage.setItem("accountantToken", res.data.token);
//                     localStorage.setItem("accountantEmail", data.accountantEmail);
//                     alert('Sign in successfully.')
//                     this.props.history.push('/accountanthome');
//                 }
//                 else{
//                     alert('Email or password Incorrect.')
//                 }
//             })
              
//     }


//     accountantForgotpasswordHandler = async (e) => {
//         e.preventDefault();

//         const {accountantEmail} = this.state;

//         const data = {
//             accountantEmail: accountantEmail
//         }

//         await axios.post("http://localhost:5000/accountant/accountantforgotpassword", data).then((res) => {

//             if (res.data.success) {
//                 this.setState(data.data)
//                 alert('Email has been sent')
//                 this.props.history.push('/accountantlogin');
//             }

//         })


//     }

//     render() {
//         return (
//             <div>
//                 <div className="accountantbody">
//                 <div className="test-container">
//                     <div className="insert-container">
//                         <div className="forms-container">
//                             <div className="insert">
//                                 <form className="insert-form1" method="POST">
//                                     <h1>Sign in</h1><br/><br/>

//                                     <div className="input-field">
//                                         <i className="fas fa-accountant"></i>
//                                         <input
//                                             type="text"
//                                             id="accountantEmail"
//                                             value={this.state.accountantEmail}
//                                             onChange={this.handleInputChange}
//                                             name="accountantEmail"
//                                             placeholder="Enter Email"
//                                             tabIndex={1}
//                                             required>
//                                         </input>
//                                     </div>

//                                     <div className="input-field">
//                                         <i className="fas fa-lock"></i>
//                                         <input
//                                             type="password"
//                                             id="accountantPassword"
//                                             value={this.state.accountantPassword}
//                                             onChange={this.handleInputChange}
//                                             name="accountantPassword"
//                                             placeholder="Enter Password"
//                                             tabIndex={2}
//                                             required>
//                                         </input>
//                                     </div>

//                                     <div>
//                                         <button type="submit" onClick={this.accountantLoginHandler}
//                                                 className="btn btn-primary" tabIndex={3}>Login
//                                         </button>
//                                     </div>
//                                     <a className="text-right" href="/adminlogin">Are you an admin? Sign in</a>
//                                 </form>

//                                 <form className="insert-form2" method="POST">
//                                     <h1>Forgot Password</h1><br/><br/>

//                                     <div className="input-field">
//                                         <i className="fas fa-envelope-open-text"></i>
//                                         <input
//                                             type="text"
//                                             id="accountantEmail"
//                                             value={this.state.accountantEmail}
//                                             onChange={this.handleInputChange}
//                                             name="accountantEmail"
//                                             placeholder="Enter email your registered with"
//                                             tabIndex={1}
//                                             required>
//                                         </input>
//                                     </div>

//                                     <div>
//                                         <button type="submit" onClick={this.accountantForgotpasswordHandler}
//                                                 className="btn btn-primary" tabIndex={3}>Send Email
//                                         </button>
//                                     </div>

//                                 </form>

//                             </div>
//                         </div>

//                         <div className="panels-container">
//                             <div className="panel left-panel">
//                                 <div className="panel-content">
//                                     <h3>Forgot password?</h3>
//                                     <p>Click here to reset your password.</p>
//                                     <button className="btn transparent" id="left-panel-btn"> Reset</button>
//                                 </div>

//                                 <img className="insert-image" src={insert1} alt="Logo"/>

//                             </div>

//                             <div className="panel right-panel">
//                                 <div className="panel-content">
//                                     <p>Please enter the email address you register your account with.
//                                         We will send you a reset password link to this email.
//                                         Click on the link and Reset Your Password.</p>
//                                     <h3>Or</h3><br/>
//                                     <button className="btn transparent" id="right-panel-btn"> Login</button>
//                                 </div>

//                                 <img className="insert-image" src={insert2} alt="Logo"/>

//                             </div>

//                         </div>

//                     </div>
//                 </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Accountant_Login;