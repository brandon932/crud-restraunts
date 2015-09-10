var mongoose = require("mongoose");
var Restraunt = mongoose.model("restraunt");

var restrauntSeed = [
  {
    name: "Denver Pizza",
    type: "pizza",
    rating: "5"
  },
  {
    name: "Bobs Burgers",
    type: "Burgers",
    rating: "5"
  },
  {
    name: "Taco Bell",
    type: "Tacos",
    rating: "3"
  }
];

function databaseSeed(){
  Restraunt.find({}, function(err, documents){
    if(!err && documents.length === 0 ){
      for (var i = 0; i < restrauntSeed.length; i++) {
        var newRestraunt= new Restraunt(restrauntSeed[i]);
        newRestraunt.save(function(err, success){
          if(!err){
            console.log('database seeded!');
          }
        })
      }
    }
  });
}
module.exports= databaseSeed;
