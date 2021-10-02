const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const purchase_order_schema = new Schema({
  order_id: {
    type: String,
    required: true,
  },
  item_name: {
    type: String,
    required: true,
  },
  site_name: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  measuring_unit: {
    type: String,
    required: true,
  },
  required_quantities: {
    type: Number,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  delivery_address: {
    type: String,
    required: true,
  },
  total_amount: {
    type: Number,
    required: true,
  },
});

const purchase_order_table = mongoose.model(
  "purchase_order",
  purchase_order_schema
);
module.exports = purchase_order_table;
