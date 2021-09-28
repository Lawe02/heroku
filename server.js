'use strict'

const http = require('http');

const fs = require('fs')

const server = http.createServer();

server.on('request',(req,res) => {
    
    fs.readFile('index.httml', function (err, data) {
         
         res.statusCode = 200;
         res.setHeader('Content-Length', data.length);
         res.setHeader('Contetnt type', 'text/html');
         res.write(data);
         res.end();
      });

});


const PORT = process.env.PORT || 8042;

 
server.listen(PORT);

console.log(`Server up and listening on port ${PORT}`);