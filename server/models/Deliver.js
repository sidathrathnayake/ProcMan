const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const deliverSchema = new mongoose.Schema({

    supplierEmail:{
        type: String,
        required: [true, 'Insert email'],
        unique:true,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Invalid email.Please provide a valid email",
        ]
    },
    order_id:{
        type: String,
        required: [true],
        unique: true
    },
    itemName:{
        type:String,
        required: [true, 'Insert item name']
    },
    site_name: {
      type: String,
      required: false,
    },
    required_quantities: {
      type: String,
      required: false,
    },
    delivery_address: {
      type: String,
      required: false,
    },
    damaged : {
      type : String,
      required: false
    },
    recieved_quantities:{
        type:String,
        required: [true, 'Insert total money spend']
    },
    total_amount: {
      type: String,
      required: true,
    },
});


module.exports = mongoose.model('delivers', deliverSchema);