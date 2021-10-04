const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
   
    supplierEmail:{
        type: String,
        required: [true, 'Insert email'],
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Invalid email.Please provide a valid email",
        ]
    },
    itemName:{
        type: String,
        required: [true],
    },
    orderID:{
        type:String,
        unique:true,
        required: [true],
        
    },
    orderPayment:{
        type:String,
        required: [true]
    },
    orderItemCount:{
        type:String,
        required: [true]
    },
});

module.exports = mongoose.model('payments', paymentSchema);