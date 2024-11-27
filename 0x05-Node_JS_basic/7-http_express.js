/**
 * A slightly more advanced http server using express
 */
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let resBody = '';
  const oldLog = console.log;
  console.log = (...arg) => {
    resBody += `${arg}\n`;
  };
  countStudents(process.argv[2])
    .then(() => {
      res.send(`This is the list of our students\n${resBody}`);
    })
    .catch((err) => {
      res.status(500).send(`${err.message}`);
    })
    .finally(() => {
      console.log = oldLog;
    });
});

app.listen(1245, 'localhost');

module.exports = app;
