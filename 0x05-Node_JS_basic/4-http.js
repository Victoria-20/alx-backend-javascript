const app = require('http');

const hostname = '127.0.0.1';

app.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
}).listen(1245, hostname);

module.exports = app;
