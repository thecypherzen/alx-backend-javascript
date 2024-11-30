/* eslint-disable no-unused-vars */
const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+$)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.listen(7865, 'localhost', () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
