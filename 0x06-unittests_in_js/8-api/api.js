/* eslint-disable no-unused-vars */
const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.listen(7865, 'localhost', () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
