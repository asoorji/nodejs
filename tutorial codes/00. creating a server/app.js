var http = require('http');

var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hey Orji kutu');
});

server.listen(3000, '127.0.0.2');
console.log('Now listening to port 3000');
