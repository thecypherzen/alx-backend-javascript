/* eslint-disable no-unused-vars */
const express = require('express');

const app = express();

// install and use middleware
/* eslint-disable */
// safe json parser
function jsonParser(req, res, next) {
  express.json()(req, res, (err) => {
    if(err) {
      return res.status(400).send();
    }
    next();
  });
};

app.use(jsonParser);
app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+$)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post('/login', (req, res) => {
  const body = req.body;
  if (!body || typeof body !== 'object' ||
      !Object.keys(body).includes('userName')) {
    res.status(400).send();
  }
  res.send(`Welcome ${body.userName}`);
});

app.listen(7865, 'localhost', () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
