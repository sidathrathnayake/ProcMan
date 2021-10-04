const SupplyOrders = require('../models/SupplyOrders');
const express = require('express');
const router = express.Router();


//? Creating new Order 
router.post('/add-order', async(req, res)=>{

    const newOrder = new SupplyOrders(req.body);

    try{
        await newOrder.save().then((result) => {
            res.status(201).send({
                success:true,
                message:"New Order added !"
            })
        })
    }catch(error){
        res.status(500).send({
            success:false,
            message:"Server error !"
        })
    }
});

//? Get all SupplyOrders
router.get('/get-all-sup-orders', async (req, res) => {
    try{
        await SupplyOrders.find().then(result=>{
            res.status(200).send({
                success:true,
                data:result
            })
        })
    }catch(error){
        res.status(500).send({
            success:false,
            message:"Server error !"
        })
    }
});
module.exports = router;