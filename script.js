'use strict';

const fs = require('fs');
const http = require('http');

const server = http.createServer(function (request, response) {
    console.log(request.method, request.url);
    if (request.url == '/style.css') {
        const style = fs.readFileSync('style.css', 'utf8');
        response.end(style)
    } else {
        const html = fs.readFileSync('index.html', 'utf8');
        response.end(html)
    }
});


const defaultPort = 3000;
const port = process.env.PORT || defaultPort;
console.log(port);
server.listen(port);
console.log('Server started at port: '+port+'\n');