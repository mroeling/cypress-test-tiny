const http = require('http');
const fs = require('fs');
const url = require('url');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((request, response) => {

let path = url.parse(request.url).pathname;

    if (request.method == 'POST' && path == '/blabla') {
        console.log('POST', path)
        var body = ''
        request.on('data', function(data) {
        body += data
        console.log('Partial body: ' + body)
        })
        request.on('end', function() {
        console.log('Body: ' + body)
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.end('post received')
        })
    } else {
        console.log('GET')
        var html = fs.readFileSync('./src/app.html');

        response.writeHead(200, {'Content-Type': 'text/html'})
        response.end(html)

    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});