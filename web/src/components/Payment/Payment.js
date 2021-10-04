/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Sidebar from "../Navigation/Accountant_Sidebar";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from 'axios'



const Payment = () => {

  const [success, setSuccess] = useState(false);
  const [payment, setPayment] =useState({
    supplierEmail:"",
    itemName: "",
    orderID: "",
    orderPayment: "",
    orderItemCount: "",
  });

    const handleInputChange = (e) =>{
    const {name,value} = e.target
    setPayment({
    ...payment,
    [name]:value
    })
    }

  const stripe = useStripe();
  const elements = useElements();

const handleSubmit = async (e) =>{
  e.preventDefault();

  const { error, paymentMethod} = await stripe.createPaymentMethod({
    type: "card",
    card: elements.getElement(CardElement)
  })


if(!error){
  try {
    const {id} = paymentMethod
    const response = await axios.post("http://localhost:5000/payment",{
      amount: payment.orderPayment,
      id
    })
    if(response.data.success){
      onSubmit();
      alert("Successful payment");
      setSuccess(true);

      

      this.props.history.push('/')
    }

  } catch (error) {
    console.log("Error", error);
  }
}else{
  console.log(error.message);
}
}

const onSubmit = () => {
  
  const {supplierEmail,itemName,orderID,orderPayment,orderItemCount}= payment;
      
  const data = {
      
      supplierEmail: supplierEmail,
      itemName:itemName,
      orderID: orderID,
      orderPayment: orderPayment,
      orderItemCount: orderItemCount
  }
  axios.post('http://localhost:5000/payment/paymentdata', data).then(res => console.log('res'));
};
  return (
    <>
    <div className="page-head">
          <Sidebar />
          <div className="page-header">
            <h1>
              <a href="#">
                <i className="fas fa-coins"></i> &nbsp;&nbsp;Supplier Payment
              </a>
            </h1>
          </div>
        </div>
      {!success ?     
      <div className="form-container">
        <form  className="form-data" onSubmit={handleSubmit}>

            
        <div className="form-group">
              <input
                className="form-control"
                type="text"
                id="supplierEmail"
                value={payment.supplierEmail}
                onChange={handleInputChange}
                name="supplierEmail"
                required
              ></input>
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="number"
                id="orderID"
                value={payment.orderID}
                onChange={handleInputChange}
                name="orderID"
                required
              ></input>
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="text"
                id="itemName"
                value={payment.itemName}
                onChange={handleInputChange}
                name="itemName"
                required
              ></input>
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="number"
                id="orderItemCount"
                value={payment.orderItemCount}
                onChange={handleInputChange}
                name="orderItemCount"
                required
              ></input>
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="number"
                id="orderPayment"
                value={payment.orderPayment}
                onChange={handleInputChange}
                name="orderPayment"
                required
              ></input>
            </div>




          <fieldset className="FormGroup">
              <div className="FormRow">
                <CardElement />
                <br/>
                <button className="btn btn-warning btndata">Pay</button>
              </div>
          </fieldset>
        </form>
        </div>
        : 
        <div>
          
        </div>
      }
    </>
  )
}


export default Payment;

