const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventory_schema = new Schema({
  item_name: {
    type: String,
    required: false,
  },
  item_description: {
    type: String,
    required: false,
  },
  site_name: {
    type: String,
    required: false,
  },
  item_capacity: {
    type: String,
    required: false,
  },
  available_quantity: {
    type: String,
    required: false,
  },
  measuring_unit: {
    type: String,
    required: false,
  },
  unit_price: {
    type: String,
    required: false,
  },
});

const inventory_table = mongoose.model("inventory", inventory_schema);
module.exports = inventory_table;
