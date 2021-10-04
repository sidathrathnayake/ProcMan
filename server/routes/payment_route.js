const express = require('express');
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const paymentModel = require('../models/Payment');
const sendEmail = require('../utils/send_email');
const Error = require('../utils/error_response');

router.post('/payment', async (req, res, next) => {
    
    const {amount , id} = req.body;

    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "ProcMan",
            payment_method: id,
            confirm:true
        })
        console.log("Payment", payment);
        res.json({
            message: "Payment Successful",
            success: true

        })
    } catch (error) {
        console.log("Error", error);
        res.json({
            message: "Payment Failed",
            success: false

        })
    }

});

//save payment data
router.post('/payment/paymentdata', async (req, res, next) => {
    
    const {supplierEmail,itemName,orderID,orderPayment,orderItemCount} = req.body;

    try {
        const payment = await paymentModel.create({
            
            supplierEmail,
            itemName,
            orderID,
            orderPayment,
            orderItemCount,
        });

        payment.save();
            const message = `
            <h1>We have payed for your delivery!</h1>
            <p>Order ID : ${orderID}</p>
            <p>Item Name : ${itemName}</p>
            <p>Usable items recieved : ${orderItemCount}</p>
            <p>Final Payment : ${orderPayment}</p>
            <p>Feel free to contact us if yuo have any problem with the payment.</p>
            
        `

        await sendEmail({
            to: payment.supplierEmail,
            subject:"ProcMan's Payments",
            text: message
        });

        

    } catch (error) {
        next(error);
    }
});

//Retrive
router.get('/payment/payments', (req,res,next) => {
    paymentModel.find().exec((err, payment) => {
        if(err){
            return next(new Error('Can not find any payment!', 400));
        }
        return res.status(200).json({
            success:true,
            payment
        });
    });
});


//Delete
router.delete('/payment/deletepayment/:id', (req, res, next) => {
    paymentModel.findByIdAndRemove(req.params.id).exec((err, deletepayment) => {
        if(err){
            return next(new Error('Can not delete the data', 400));
        }
        return res.status(200).json({
            success:[true, " Deleted successfully!"],
            deletepayment
        });
    }); 
});

module.exports = router;