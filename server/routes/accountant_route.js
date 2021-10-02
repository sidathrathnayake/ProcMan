const express = require('express');
const router = express.Router();
const crypto =require('crypto');
const accountantModel = require('../models/Accountant');
const Error = require('../utils/error_response');
const sendEmail = require('../utils/send_email');
const  { getPrivateData }  = require('../middleware/private_error');
const { protect }  =  require('../middleware/accountant_protect');

//Protecion
router.get('/accountant', protect,getPrivateData);

//Register
router.post('/accountant/accountantregister', async (req, res, next) => {
    
    const {accountantName,accountantEmail,accountantPassword} = req.body;

    try {
        const accountant = await accountantModel.create({
            accountantName,
            accountantEmail,
            accountantPassword,
        });

        sendToken(accountant, 201, res);

        const URL = `http://localhost:3000/accountantlogin/`;
        const message = `
            <h1>You have been selected to our accountant panel!</h1>
            <p>Email : ${accountantEmail}</p>
            <p>Password : ${accountantPassword}</p>
            <p>Make sure to use above email address and password to login.</p>
            <a href=${URL} clicktracking=off>${URL}</a>
            
        `

        await sendEmail({
            to: accountant.accountantEmail,
            subject:"Welcome to ProcMan's accountant panel",
            text: message
        });

    } catch (error) {
        next(error);
    }
});

//Login
router.post('/accountant/accountantlogin',async (req,res,next) =>{
    
    const {accountantEmail, accountantPassword} = req.body;

    if(!accountantEmail || !accountantPassword){
        return next(new Error("Please provide Email and Password...!",400));
    }

    try {
        const accountant = await accountantModel.findOne({accountantEmail}).select("+accountantPassword");

        if(!accountant){
            return next(new Error("Invalid credentials...!",401));
        }

        const isMatch = await accountant.matchPasswords(accountantPassword);

        if(!isMatch){
            return next(new Error("Invalid Password...!",401));
        }

        sendToken(accountant, 200, res);

    } catch (error) {
        next(error);       
    }

});

//Token send to the model class
const sendToken  = (accountant, statusCode, res) =>{
    const token = accountant.getSignedToken();
    res.status(statusCode).json({
        success:true,
        token
    });
}

module.exports = router;
