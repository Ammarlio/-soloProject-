var express = require('express');
var bodyParser = require('body-parser'); 
var db = require('../database-mongo');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/tasks', function (req, res) {
  db.Task.find(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      var arr=[];
      for(var i = data.length-5 ; i < data.length ; i++){
        arr.push(data[i])
      }
      res.send(arr);
    }
  });
});

app.post('/tasks', function (req, res) {
  console.log('Hellllloooo',req.body)
  db.save(req.body,function(err,data){
    if(err){
      res.send(err)
    }
      res.send(data)
    

  })
});


app.listen(process.env.PORT || 3000, function() {
  console.log('listening on port 3000!');
});

