var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello binary or non binary organisms');
  res.end();
}).listen(8080);