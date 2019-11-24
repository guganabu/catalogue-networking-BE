const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  console.log('requesting home!')
});

module.exports = router;
