const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const adminSchema = new mongoose.Schema({
    adminEmail:{
        type: String,
        required: [true, 'Insert email'],
        unique:true,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Invalid email.Please provide a valid email",
        ]
    },
    adminPassword:{
        type:String,
        required: [true, 'Insert password']
    },
});


adminSchema.pre("save", async function(next){
    if(!this.isModified("adminPassword")){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.adminPassword = await bcrypt.hash(this.adminPassword, salt);
    next();

});

adminSchema.methods.matchPasswords = async function(adminPassword){
    return await bcrypt.compare(adminPassword, this.adminPassword);  
}

adminSchema.methods.getSignedToken = function(){
    return jwt.sign(
        {id: this._id},
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE, }
        );
};

module.exports = mongoose.model('admins', adminSchema);