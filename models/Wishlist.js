const mongoose = require('mongoose');

const WishlistSchema = new mongoose.Schema({
  product_key: String,
  title: String,
  added_date: {type: Date, default: new Date()},
  is_active: {type: Boolean, default: true},
  user_id: String,
  user_name: String
});

module.exports = mongoose.model('wishlist', WishlistSchema);
