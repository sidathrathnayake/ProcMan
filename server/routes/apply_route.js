const express = require('express');
const router = express.Router();
const crypto =require('crypto');
const applyModel = require('../models/Apply');
const Error = require('../utils/error_response');

//Apply
router.post('/apply/apply', async (req, res, next) => {
    
    const apply = new applyModel(req.body);

    apply.save((err) => {
        if(err){
            return next(new Error('Something went wrong!. Please check and try again.', 400));
        }
        return res.status(201).json({
            success: [true, 'Added successfully'],
            apply
        });
    });

});


//Retrive
router.get('/apply/applies', (req,res,next) => {
    applyModel.find().exec((err, apply) => {
        if(err){
            return next(new Error('Can not find any data!', 400));
        }
        return res.status(200).json({
            success:true,
            apply
        });
    });
});

// Retrive specific data by id
router.get('/apply/applydata/:id',(req,res) =>{
    const applyid = req.params.id;
    applyModel.findById(applyid,(err, apply) => {
        if(err){
            return next(new Error("Can not find a data with this id...!",400));
        }
        return res.status(200).json({
            success:true,
            apply
        });
    })
})

//Delete
router.delete('/apply/deleteapply/:id', (req, res, next) => {
    applyModel.findByIdAndRemove(req.params.id).exec((err, deleteapply) => {
        if(err){
            return next(new Error('Can not delete the data', 400));
        }
        return res.status(200).json({
            success:[true, " Deleted successfully!"],
            deleteapply
        });
    }); 
});

module.exports = router;
