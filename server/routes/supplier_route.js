const express = require('express');
const router = express.Router();
const crypto =require('crypto');
const supplierModel = require('../models/Supplier');
const Error = require('../utils/error_response');
const sendEmail = require('../utils/send_email');
const  { getPrivateData }  = require('../middleware/private_error');
const { protect }  =  require('../middleware/supplier_protect');

//Protecion
router.get('/supplier', protect,getPrivateData);

//Register
router.post('/supplier/supplierregister', async (req, res, next) => {
    
    const {supplierName,supplierEmail,supplierPhone,itemName,itemPrice,itemScale,totalItemCount,totalSpend,supplierRating,supplierPassword} = req.body;

    try {
        const supplier = await supplierModel.create({
            
            supplierName,
            supplierEmail,
            supplierPhone,
            itemName,
            itemPrice,
            itemScale,
            totalItemCount,
            totalSpend,
            supplierRating,
            supplierPassword,
        });

        sendToken(supplier, 201, res);

        const message = `
            <h1>Your request has been approved and you have been selected to our Suppliers Panel!</h1>
            <p>Email : ${supplierEmail}</p>
            <p>Password : ${supplierPassword}</p>
            <p>Make sure to use above email address and password to login.</p>
            <p>Download the ProcMan mobile application from Google Playstore or Apple Appstore.</p>
            
        `

        await sendEmail({
            to: supplier.supplierEmail,
            subject:"Welcome to ProcMan's suppliers panel",
            text: message
        });

    } catch (error) {
        next(error);
    }
});

//Login
router.post('/supplier/supplierlogin',async (req,res,next) =>{
    
    const supplierEmail = req.body.supplierEmail
    const supplierPassword = req.body.supplierPassword;

    if(!supplierEmail || !supplierPassword){
        return next(new Error("Please provide an Email and Password...!",400));
    }

    try {
        const supplier = await supplierModel.findOne({supplierEmail}).select("+supplierPassword");

        if(!supplier){
            return next(new Error("Invalid credentials...!",401));
        }

        const isMatch = await supplier.matchPasswords(supplierPassword);

        if(!isMatch){
            return next(new Error("Invalid Password...!",401));
        }

        sendToken(supplier, 200, res);

    } catch (error) {
        next(error);       
    }

});

//Retrive
router.get('/supplier/suppliers', (req,res,next) => {
    supplierModel.find().exec((err, supplier) => {
        if(err){
            return next(new Error('Can not find any supplier!', 400));
        }
        return res.status(200).json({
            success:true,
            supplier
        });
    });
});

// Retrive specific data by id
router.get('/supplier/supplierdata/:id',(req,res) =>{
    const supplierid = req.params.id;
    supplierModel.findById(supplierid,(err, supplier) => {
        if(err){
            return next(new Error("Can not find a supplier with this id...!",400));
        }
        return res.status(200).json({
            success:true,
            supplier
        });
    })
})

//Update
router.put('/supplier/updatesupplier/:id', (req, res, next) => {
    
    supplierModel.findByIdAndUpdate(req.params.id, {
        $set:req.body
    },
    (err, supplier) => {
        if(err){
            return next(new Error('Can not update the data!', 400));
        }
        
        return res.status(200).json({
            success:'Succussfully updated.'
        });
    });
});

//Delete
router.delete('/supplier/deletesupplier/:id', (req, res, next) => {
    supplierModel.findByIdAndRemove(req.params.id).exec((err, deletesupplier) => {
        if(err){
            return next(new Error('Can not delete the data', 400));
        }
        return res.status(200).json({
            success:[true, " Deleted successfully!"],
            deletesupplier
        });
    }); 
});

//Token send to the model class
const sendToken  = (supplier, statusCode, res) =>{
    const token = supplier.getSignedToken();
    res.status(statusCode).json({
        success:true,
        token
    });
}

module.exports = router;
