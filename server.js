const express = require("express");
const app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


app.use(express.static(__dirname + "pages/javascript"));
app.use(express.static(__dirname + "/pages"));
app.use(express.static(__dirname + "/pages/styles"));
app.use(express.static(__dirname + "pages/images"));


app.get("/",function(req,res){
  res.render(__dirname + "/pages/home.ejs");
});
app.get("/home",function(req,res){
  res.render(__dirname + "/pages/home.ejs");
});
app.get("/activities/Training",function(req,res){
  res.render(__dirname + "/pages/Training.ejs");
});
app.get("/activities/Lectures",function(req,res){
  res.render(__dirname + "/pages/Lectures.ejs");
});
app.get("/activities/Trips",function(req,res){
  res.render(__dirname + "/pages/trips.ejs");
});
app.get("/banking",function(req,res){
  res.render(__dirname + "/pages/Banking.ejs");
});
app.get("/contact",function(req,res){
  res.render(__dirname + "/pages/contact.ejs");
});
app.get("*",function(req,res){
  res.render(__dirname + "/pages/error.ejs");
});
server.listen(3600);

