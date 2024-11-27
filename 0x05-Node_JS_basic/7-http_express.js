/**
 * A slightly more advanced http server using express
 */
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
// root route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
// students route
app.get('/students', (req, res) => {
  let resBody = 'This is the list of our students\n';
  // redirect stdout
  const oldLog = console.log;
  console.log = (...arg) => {
    resBody += `${arg}\n`;
  };
  // execute function and capture output
  countStudents(process.argv[2])
    .then(() => {
      res.send(resBody);
    })
    .catch((err) => {
      res.status(500).send(`${resBody}${err.message}`);
    })
    .finally(() => {
      // restore stdout
      console.log = oldLog;
    });
});

app.listen(1245, 'localhost');

module.exports = app;
