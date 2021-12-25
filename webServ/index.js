const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

var server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/3.html', 'utf8');
    myReadStream.pipe(response);
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
