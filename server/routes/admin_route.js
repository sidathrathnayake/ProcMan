const express = require('express');
const router = express.Router();
const crypto =require('crypto');
const adminModel = require('../models/Admin');
const Error = require('../utils/error_response');
const sendEmail = require('../utils/send_email');
const  { getPrivateData }  = require('../middleware/private_error');
const { protect }  =  require('../middleware/admin_protect');

//Protecion
router.get('/admin', protect,getPrivateData);

//Register
router.post('/admin/adminregister', async (req, res, next) => {
    
    const {adminEmail,adminPassword} = req.body;

    try {
        const admin = await adminModel.create({
            
            adminEmail,
            adminPassword,
        });

        sendToken(admin, 201, res);

        const URL = `http://localhost:3000/adminlogin/`;
        const message = `
            <h1>You have been selected to our admin panel!</h1>
            <p>Email : ${adminEmail}</p>
            <p>Password : ${adminPassword}</p>
            <p>Make sure to use above email address and password to login.</p>
            <a href=${URL} clicktracking=off>${URL}</a>
            
        `

        await sendEmail({
            to: admin.adminEmail,
            subject:"Welcome to ProcMan's admin panel",
            text: message
        });

    } catch (error) {
        next(error);
    }
});

//Login
router.post('/admin/adminlogin',async (req,res,next) =>{
    
    const {adminEmail, adminPassword} = req.body;

    if(!adminEmail || !adminPassword){
        return next(new Error("Please provide Email and Password...!",400));
    }

    try {
        const admin = await adminModel.findOne({adminEmail}).select("+adminPassword");

        if(!admin){
            return next(new Error("Invalid credentials...!",401));
        }

        const isMatch = await admin.matchPasswords(adminPassword);

        if(!isMatch){
            return next(new Error("Invalid Password...!",401));
        }

        sendToken(admin, 200, res);

    } catch (error) {
        next(error);       
    }

});

//Token send to the model class
const sendToken  = (admin, statusCode, res) =>{
    const token = admin.getSignedToken();
    res.status(statusCode).json({
        success:true,
        token
    });
}

module.exports = router;
