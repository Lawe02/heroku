'use strict'

var http = require('http');

var fs = require('fs')

const server = http.createServer();

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello binary or non binary organisms');
  res.end();
});
const PORT = process.env.PORT || 8042;

// Have the server start listening locally to the port 8042,
// and with Heroku it will get a dynamic port assigned automatically
server.listen(PORT);

console.log(`Server up and listening on port ${PORT}`);