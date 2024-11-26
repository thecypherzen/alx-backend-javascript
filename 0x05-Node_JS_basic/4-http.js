/**
 * A simple http server
 */

const { createServer } = require('http');

const host = 'localhost';
const port = 1245;

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, host, () => {});

module.exports = app;
