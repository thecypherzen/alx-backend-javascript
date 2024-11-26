/**
 * An http server
 * - Runs on localhost on port 1245
 * - Routes:
 *   - /: Returns 'Hello Holberton School!'
 *   - /students: Returns 'This is the list of our students'
 *     followed by content as in 3-read_file_async.js
 *     - the name of the database is passed as an argument
 *       to this file
 */

const { createServer } = require('http');
const countStudents = require('./3-read_file_async');

const app = createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  // root route
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
    // /students route
  } else if (req.url === '/students') {
    let resBody = 'This is the list of our students\n';
    // redirect stdout and capture output
    const oldLog = console.log;
    console.log = (...args) => {
      resBody += `${args.join('')}\n`;
    };
    if (process.argv.length > 2) {
      countStudents(process.argv[2])
        .then(() => {
          res.status_code = 200;
          res.end(resBody);
        })
        .catch(() => {
          res.statusCode = 500;
          res.end(resBody);
        })
        .finally(() => {
          console.log = oldLog;
        });
    } else {
      res.statusCode = 400;
      res.end('');
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

app.listen(1245, 'localhost', () => {});

module.exports = app;
