var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http)
var engines = require('consolidate');
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', __dirname + '/views');

app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.get('/', function(req, res){
    res.render('./index.html');
  });
http.listen(3000, function(){
  console.log('listening on *:3000');
});