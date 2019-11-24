var express = require('express');
var router = express.Router();
const User = require('../models/User');
const Wishlist = require('../models/Wishlist');

// API to list all users available in the system
router.get('/list', function(req, res) {
  let userQuery = {};
  let queryParams = req.query;
  if (queryParams && queryParams.user_id) {
    userQuery['user_id'] = queryParams.user_id;
  }
  User.find(userQuery, function(err, users) {
    console.log('all users', users);
    res.send(users);
  })
});

//API to add list of items into user's personal wishlist
router.post('/wishlist', function(req, res) {
  const wishlistItems = req.body;
  let returnMsg = '';
  if (wishlistItems && wishlistItems.length) {
    wishlistItems.map( wishlistItem => {
      const wishList = new Wishlist();
      wishList.save({
        product_key: wishlistItem.product_key,
        title: wishlistItem.title,
        user_id: wishlistItem.user_id,
        user_name: wishlistItem.user_name
      });
    })
    returnMsg = 'Your wishlist has been updated!';
  } else {
    returnMsg = 'No wishlist items to be added';
  }
  res.send(returnMsg);
})

module.exports = router;
