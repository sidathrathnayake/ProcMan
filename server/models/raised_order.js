const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const raised_order_schema = new Schema({
  order_id: {
    type: String,
    required: true,
  },
  item_name: {
    type: String,
    required: true,
  },
  measuring_unit: {
    type: String,
    required: true,
  },
  required_quantities: {
    type: String,
    required: true,
  },
  delivery_address: {
    type: String,
    required: true,
  },
  total_amount: {
    type: String,
    required: true,
  },
  supplierName:{
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: false,
  },
  damaged : {
    type : String,
    required: false
  },
  supplier_note : {
    type : String,
    required : false
  }
});

const raised_order_table = mongoose.model(
  "raised_order",
  raised_order_schema
);
module.exports = raised_order_table;
