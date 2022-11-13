const http = require('http');
const fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'application/json'});

  var myObj ={
    name: 'Orji',
    job: 'Tech bro',
    age: 25
  };
  res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('ýo dawgs, now listening to port 3000');
