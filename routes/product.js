const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// API to add a new product into the model
router.post('/add', function(req, res) {
  const productData = req.body;
  console.log('productData', productData)
  const productInstance = new Product({
    product_key: productData.product_key,
    title: productData.title,
    owner: productData.user_id,
    catalog: productData.catalog
  });
  productInstance.save(function(err, product) {
    if (err) {
      res.send(err);
    } else {
      res.send(product);
    }
  })
});

// API to list all products available in system
router.get('/all', function(req, res) {
  const requestParams = req.query;
  let filter = {};
  if (requestParams.title) {
    const regExp =
    filter = {title: { $regex: new RegExp(requestParams.title), $options: 'i' }}
  } else if (requestParams.product_key) {
    filter = {product_key: { $regex: new RegExp(requestParams.product_key), $options: 'i' }}
  }
  console.log('filter', filter)
  Product.find(filter, function(err, products) {
    if (err) {
      res.send(err);
    } else {
      res.send(products);
    }
  })
})


module.exports = router;
