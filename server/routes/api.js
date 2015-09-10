var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Restraunt = mongoose.model('restraunt');


router.get('/restraunts', function(req, res, next) {
  Restraunt.find(function(err, restraunts){
    res.json(restraunts);
  });
});
router.post('/restraunts', function(req, res, next) {
  var newRestraunt = new Restraunt(req.body);
  newRestraunt.save(function(err, restraunts){
    console.log(err);
    console.log(restraunts);
    res.send(restraunts);
  });
});
router.put('/restraunts/:id', function(req, res, next) {
  var query = {"_id":req.params.id};
  var update = req.body;
  var options = {"new": true};
  Restraunt.findOneAndUpdate(query,update,options, function(err, restraunt){
    res.json(restraunt);
  });
});
router.delete('/restraunts/:id', function(req, res, next) {
  var query = {"_id":req.params.id};
  // var options = {"new": true};
  Restraunt.findOneAndRemove(query, function(err, restraunt){
    res.json(restraunt);
  });
});
router.get('/restraunts/:id', function(req, res, next) {
  res.json();
});

module.exports = router;
