const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const sitemanagerSchema = new mongoose.Schema({
    sitemanagerName:{
        type: String,
        required: [true, 'Insert name'],
        unique: true
    },
    sitemanagerEmail:{
        type: String,
        required: [true, 'Insert email'],
        unique:true,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Invalid email.Please provide a valid email",
        ]
    },
    sitemanagerPhone:{
        type: String,
        required: [true, 'Insert contact number'],
        unique: true
    },
    site:{
        type:String,
        required: [true, 'Insert site name']
    },
    sitemanagerPassword:{
        type:String,
        required: [true, 'Insert password']
    },
});


sitemanagerSchema.pre("save", async function(next){
    if(!this.isModified("sitemanagerPassword")){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.sitemanagerPassword = await bcrypt.hash(this.sitemanagerPassword, salt);
    next();

});

sitemanagerSchema.methods.matchPasswords = async function(sitemanagerPassword){
    return await bcrypt.compare(sitemanagerPassword, this.sitemanagerPassword);  
}

sitemanagerSchema.methods.getSignedToken = function(){
    return jwt.sign(
        {id: this._id},
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE, }
        );
};

module.exports = mongoose.model('sitemanagers', sitemanagerSchema);