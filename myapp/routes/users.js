var express = require('express');

var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

app.get('/', function(req, res){
  res.render("addcustomer");
  
});

app.post('/', function(req, res){
  console.log(req.body);
  res.send("recieved your request!");
});

/* GET users listing. */

module.exports = app;
