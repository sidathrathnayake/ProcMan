const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const supplierSchema = new mongoose.Schema({
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
    totalItemCount:{
        type:String,
        required: [true, 'Insert total item count']
    },
    totalSpend:{
        type:String,
        required: [true, 'Insert total money spend']
    },
    supplierRating:{
        type:String,
        required: [true, 'Insert supplier rating']
    },
    supplierPassword:{
        type:String,
        required: [true, 'Insert password']
    },
});


supplierSchema.pre("save", async function(next){
    if(!this.isModified("supplierPassword")){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.supplierPassword = await bcrypt.hash(this.supplierPassword, salt);
    next();

});

supplierSchema.methods.matchPasswords = async function(supplierPassword){
    return await bcrypt.compare(supplierPassword, this.supplierPassword);  
}

supplierSchema.methods.getSignedToken = function(){
    return jwt.sign(
        {id: this._id},
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE, }
        );
};

module.exports = mongoose.model('suppliers', supplierSchema);