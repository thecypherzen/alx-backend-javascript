/* eslint-disable */
const assert = require('chai').assert;
const getPaymentToken = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('test promise properly', (done) => {
    getPaymentToken(true)
      .then((result) => {
        assert.isObject(result, 'result is not an object');
        assert.deepEqual(
          result,
          { data: 'Successful response from the API' });
        done();
      });
  });
});
