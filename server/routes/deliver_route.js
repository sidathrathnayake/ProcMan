const express = require('express');
const router = express.Router();
const crypto =require('crypto');
const deliverModel = require('../models/Deliver');
const Error = require('../utils/error_response');


//Register
router.post('/deliver/adddeliver', async (req, res, next) => {
    
    const deliver = new deliverModel(req.body);

    deliver.save((err) => {
        if(err){
            return next(new Error('Something went wrong!. Please check and try again.', 400));
        }
        return res.status(201).json({
            success: [true, 'Added successfully']
        });
    });

});

//Retrive
router.get('/deliver/delivers', (req,res,next) => {
    deliverModel.find().exec((err, deliver) => {
        if(err){
            return next(new Error('Can not find any deliver!', 400));
        }
        return res.status(200).json({
            success:true,
            deliver
        });
    });
});

// Retrive specific data by id
router.get('/deliver/deliverdata/:id',(req,res) =>{
    const deliverid = req.params.id;
    deliverModel.findById(deliverid,(err, deliver) => {
        if(err){
            return next(new Error("Can not find a data with this id...!",400));
        }
        return res.status(200).json({
            success:true,
            deliver
        });
    })
})

//Delete
router.delete('/deliver/deletedeliver/:id', (req, res, next) => {
    deliverModel.findByIdAndRemove(req.params.id).exec((err, deletedeliver) => {
        if(err){
            return next(new Error('Can not delete the data', 400));
        }
        return res.status(200).json({
            success:[true, " Deleted successfully!"],
            deletedeliver
        });
    }); 
});

module.exports = router;