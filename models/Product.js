const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  product_key: String,
  title: String,
  published_date: {type: Date, default: Date.now},
  is_active: {type: Boolean, default: true},
  catalog: String,
  owner: String
});

module.exports = mongoose.model('product', ProductSchema);
