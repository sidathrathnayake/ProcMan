const mongoose = require('mongoose');

const applySchema = new mongoose.Schema({
    supplierName:{
        type: String,
        required: [true, 'Insert name'],
        unique: true
    },
    supplierEmail:{
        type: String,
        required: [true, 'Insert email'],
        unique:true,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Invalid email.Please provide a valid email",
        ]
    },
    supplierPhone:{
        type: String,
        required: [true, 'Insert contact number'],
        unique: true
    },
    itemName:{
        type:String,
        required: [true, 'Insert item name']
    },
    itemPrice:{
        type:String,
        required: [true, 'Insert item price']
    },
    itemScale:{
        type:String,
        required: [true, 'Insert item scale type']
    },
});

module.exports = mongoose.model('applys', applySchema);