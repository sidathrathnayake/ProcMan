const jwt = require('jsonwebtoken');
const Sitemanager = require('../models/SiteManager');
const Error = require('../utils/error_response')

exports.protect = async ( req,res,next) =>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1]
    }
    if(!token){
        return next(new Error("Not authorized access to this route",401));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const sitemanager = await Sitemanager.findById(decoded.id);

        if(!sitemanager){
            return next(new Error("Can not find a user with this id",404));
        }

        req.sitemanager=sitemanager;
        next();

    } catch (error) {
        return next(new Error("Not authorized access to this route",401));
    }
}