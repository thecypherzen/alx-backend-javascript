/* Defines payment */
/* eslint-disable */
const calculateNumber = require('./utils').calculateNumber;

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const grandTotal = calculateNumber('SUM', totalAmount,
                                     totalShipping);
  console.log(`The total is: ${grandTotal}`);
}

module.exports = sendPaymentRequestToApi;
