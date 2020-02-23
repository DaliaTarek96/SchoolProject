const mongoose = require("mongoose");
autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost:27017/itiDBReact");
 
autoIncrement.initialize(connection);

 const newsSheama = mongoose.Schema({
       img:String,
       description:String,
       title:String
})



newsSheama.plugin(autoIncrement.plugin, 'schoolLatestNews');

mongoose.model("schoolLatestNews",newsSheama)

