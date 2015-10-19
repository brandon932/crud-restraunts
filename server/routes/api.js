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
router.get('/restraunts/:id', function(req, res, next) {
  Restraunt.findById(req.params.id, function(err, restraunt){
    res.json(restraunt);
  });
});
router.put('/restraunts/:id', function(req, res, next) {
  var update = req.body;
  var options = {"new": true};
  Restraunt.findByIdAndUpdate(req.params.id,update,options, function(err, restraunt){
    res.json(restraunt);
  });
});
router.delete('/restraunts/:id', function(req, res, next) {
  var options = {"new": true};
  Restraunt.findByIdAndRemove(req.params.id, function(err, restraunt){
    res.json(restraunt);
  });
});


module.exports = router;
