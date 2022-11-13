const http = require('http');
const fs = require('fs');

//READ AND WRITE FILE BIT BY BIT USING STREAM INSTEAD OF READFILE
// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')
//
// myReadStream.pipe(myWriteStream)


var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});

  var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
  myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.2');
console.log('Now listening to port 3000');
