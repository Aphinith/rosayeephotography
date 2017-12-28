var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log('success in the server side');
  res.status(200).send('OK!!!!!');
});

module.exports = router;