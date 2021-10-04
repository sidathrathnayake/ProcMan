const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const accountantSchema = new mongoose.Schema({
    accountantName:{
        type: String,
        required: [true, 'Insert name'],
        unique: true
    },
    
    accountantEmail:{
        type: String,
        required: [true, 'Insert email'],
        unique:true,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Invalid email.Please provide a valid email",
        ]
    },
    accountantPassword:{
        type:String,
        required: [true, 'Insert password']
    },
});


accountantSchema.pre("save", async function(next){
    if(!this.isModified("accountantPassword")){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.accountantPassword = await bcrypt.hash(this.accountantPassword, salt);
    next();

});

accountantSchema.methods.matchPasswords = async function(accountantPassword){
    return await bcrypt.compare(accountantPassword, this.accountantPassword);  
}

accountantSchema.methods.getSignedToken = function(){
    return jwt.sign(
        {id: this._id},
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE, }
        );
};

module.exports = mongoose.model('accountants', accountantSchema);