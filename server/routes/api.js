var express = require('express');
var router = express.Router();

router.get('/restraunts', function(req, res, next) {
  var hello = 'test';
  res.json(hello);
});
router.post('/restraunts', function(req, res, next) {
  res.json();
});
router.get('/restraunts/:id', function(req, res, next) {
  res.json();
});
router.put('/restraunts/:id', function(req, res, next) {
  res.json();
});

module.exports = router;
