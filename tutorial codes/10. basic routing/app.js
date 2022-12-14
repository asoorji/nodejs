const http = require('http');
const fs = require('fs');

var server = http.createServer(function(req, res){
console.log('request was made: ' + req.url);

if(req.url === '/home' || req.url === '/'){
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream(__dirname + '/index.html').pipe(res);
} else if(req.url === '/contact'){
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream(__dirname + '/contact.html').pipe(res);
} else if(req.url === '/api/employee'){
  var employee = [{
    name: 'Ayo',
    dept:'Energy'
  },
  {
    name: 'Udi',
    dept: 'Creative'
  },
  {
    name: 'Aso',
    dept: 'Dev'
  }
];
res.writeHead(200, {'Content-Type': 'application/json'});
res.end(JSON.stringify(employee));
}
 else{
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream(__dirname + '/404.html').pipe(res);}
});

server.listen(3000, '127.0.0.1');
console.log('ýo dawgs, now listening to port 3000...');
