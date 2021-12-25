const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader("UserId", 12);
    res.setHeader("Content-Type", "text/html; charset=utf-8;");
    res.write("<body><h2>Привет миг</h2></body>");
    res.write("</html>");
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});