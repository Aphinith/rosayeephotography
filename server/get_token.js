var express = require('express');
var router = express.Router();
var keys = require('../secret_keys.js');

router.get('/', function(req, res, next) {
  console.log('success in the server side');
  console.log('this is the req: ', req);
  console.log('this is keys.clientID: ', keys.clientID);
  console.log('this is keys.clientSecret: ', keys.clientSecret);
  res.status(200).send('OK!!!!!');
});

module.exports = router;