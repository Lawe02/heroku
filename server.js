'use strict';

// Set access to the http module (provided by node)
const http = require('http');

// Set access to the fs (file system) module
const fs = require('fs');

// Create a local server that responds & sends data back to the requestor (browser)
const server = http.createServer();

// Declare a function for what happens when the (incoming) request event triggers
server.on('request', (req, res) => {

    console.log(req.url);
    
    if (req.url == '/Exercise2.js') {
        fs.readFile('Exercise2.js',function (err, data){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/javascript');
            res.setHeader('Content-Length', data.length);
            res.write(data);
            res.end();
        });
    }
    else {
        fs.readFile('index.html',function (err, data){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.setHeader('Content-Length', data.length);
            res.write(data);
            res.end();
        });
    }
});

// Adding a dynamic PORT for Heroku, locally still 8042
const PORT = process.env.PORT || 8042;

// Have the server start listening locally to the port 8042,
// and with Heroku it will get a dynamic port assigned automatically
server.listen(PORT);

console.log(`Server up and listening on port ${PORT}`);