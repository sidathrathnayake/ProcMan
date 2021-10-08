const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const purchase_order_schema = new Schema({
  order_id: {
    type: String,
    required: false,
  },
  item_name: {
    type: String,
    required: false,
  },
  supplier_name: {
    type : String,
    required: false
  },
  site_name: {
    type: String,
    required: false,
  },
  priority: {
    type: String,
    required: false,
  },
  measuring_unit: {
    type: String,
    required: false,
  },
  required_quantities: {
    type: String,
    required: false,
  },
  note: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
  },
  delivery_address: {
    type: String,
    required: false,
  },
  total_amount: {
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
  },
  date : {
    type : String,
    required : true
  }
});

const purchase_order_table = mongoose.model(
  "purchase_order",
  purchase_order_schema
);
module.exports = purchase_order_table;
