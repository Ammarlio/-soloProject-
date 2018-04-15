var mongoose = require('mongoose');
mongoose.connect('mongodb://ammar:ammar@ds115131.mlab.com:15131/ammar');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  Tasks: String
});

var Task = mongoose.model('Task', itemSchema);

var save = function(data,callback) {
   var task=new Task(data);
   task.save(function(err,data){
    if(err){
      callback(err);
    }
    callback(null,data)
   })
};

module.exports.save = save;
module.exports.Task=Task;