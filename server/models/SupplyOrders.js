const mongoose = require('mongoose');

const SchemaSupplyOrders = new mongoose.Schema({

    itemName:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    remark:{
        type:String,
        required:false
    },
    supplierNote:{
        type:String,
        required:false
    }

})
const SupplyOrders = mongoose.model("SupplyOrders",SchemaSupplyOrders);
module.exports = SupplyOrders;