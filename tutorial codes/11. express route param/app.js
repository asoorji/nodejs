var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname +  '/index.html');
})

// app.get('/', function(req, res){
//     res.send('This is the homepage');
// })

app.get('/contact', function(req, res){
    res.send('This is the contact page');
})

app.get('/profile/:id', function(req, res){
    res.send('You requested to see a profile with the id of ' + req.params.id);
})

app.get('/users/:username', function(req, res){
    res.send('You requested to see a profile with the username ' + req.params.username);
})

app.listen(3000);