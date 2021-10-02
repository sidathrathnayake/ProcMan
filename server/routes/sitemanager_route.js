const express = require('express');
const router = express.Router();
const crypto =require('crypto');
const sitemanagerModel = require('../models/SiteManager');
const Error = require('../utils/error_response');
const sendEmail = require('../utils/send_email');
const  { getPrivateData }  = require('../middleware/private_error');
const { protect }  =  require('../middleware/sitemanager_protect');

//Protecion
router.get('/sitemanager', protect,getPrivateData);

//Register
router.post('/sitemanager/sitemanagerregister', async (req, res, next) => {
    
    const {sitemanagerName,sitemanagerEmail,sitemanagerPhone,site,sitemanagerPassword} = req.body;

    try {
        const sitemanager = await sitemanagerModel.create({
            
            sitemanagerName,
            sitemanagerEmail,
            sitemanagerPhone,
            site,
            sitemanagerPassword,
        });

        sendToken(sitemanager, 201, res);

        const message = `
            <h1>You have been registered as a sitemanager!</h1>
            <p>Email : ${sitemanagerEmail}</p>
            <p>Password : ${sitemanagerPassword}</p>
            <p>Make sure to use above email address and password to login.</p>
            <p>Download the ProcMan mobile application from Google Playstore or Apple Appstore.</p>
            
        `

        await sendEmail({
            to: sitemanager.sitemanagerEmail,
            subject:"Welcome to ProcMan's sitemanagers panel",
            text: message
        });

    } catch (error) {
        next(error);
    }
});

//Login
router.post('/sitemanager/sitemanagerlogin',async (req,res,next) =>{
    
    const {sitemanagerEmail, sitemanagerPassword} = req.body;

    if(!sitemanagerEmail || !sitemanagerPassword){
        return next(new Error("Please provide an Email and Password...!",400));
    }

    try {
        const sitemanager = await sitemanagerModel.findOne({sitemanagerEmail}).select("+sitemanagerPassword");

        if(!sitemanager){
            return next(new Error("Invalid credentials...!",401));
        }

        const isMatch = await sitemanager.matchPasswords(sitemanagerPassword);

        if(!isMatch){
            return next(new Error("Invalid Password...!",401));
        }

        sendToken(sitemanager, 200, res);

    } catch (error) {
        next(error);       
    }

});

//Retrive
router.get('/sitemanager/sitemanagers', (req,res,next) => {
    sitemanagerModel.find().exec((err, sitemanagers) => {
        if(err){
            return next(new Error('Can not find any sitemanager!', 400));
        }
        return res.status(200).json({
            success:true,
            sitemanagers
        });
    });
});

// Retrive specific data by id
router.get('/sitemanager/sitemanagerdata/:id',(req,res) =>{
    const sitemanagerid = req.params.id;
    sitemanagerModel.findById(sitemanagerid,(err, sitemanager) => {
        if(err){
            return next(new Error("Can not find a sitemanager with this id...!",400));
        }
        return res.status(200).json({
            success:true,
            sitemanager
        });
    })
})

//Update
router.put('/sitemanager/updatesitemanager/:id', (req, res, next) => {
    
    sitemanagerModel.findByIdAndUpdate(req.params.id, {
        $set:req.body
    },
    (err, sitemanager) => {
        if(err){
            return next(new Error('Can not update the data!', 400));
        }
        
        return res.status(200).json({
            success:'Succussfully updated.'
        });
    });
});

//Delete
router.delete('/sitemanager/deletesitemanager/:id', (req, res, next) => {
    sitemanagerModel.findByIdAndRemove(req.params.id).exec((err, deletesitemanager) => {
        if(err){
            return next(new Error('Can not delete the data', 400));
        }
        return res.status(200).json({
            success:[true, " Deleted successfully!"],
            deletesitemanager
        });
    }); 
});

//Token send to the model class
const sendToken  = (sitemanager, statusCode, res) =>{
    const token = sitemanager.getSignedToken();
    res.status(statusCode).json({
        success:true,
        token
    });
}

module.exports = router;
