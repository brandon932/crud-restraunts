var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Restraunt = new Schema(
  {
    name: String,
    type: String,
    rating: String
  }
);

mongoose.model('restraunt', Restraunt);

mongoose.connect('mongodb://localhost/restraunt');
