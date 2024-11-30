const axios = require('axios');
const { assert } = require('chai');

/* eslint-disable */
describe('test api if successful', () => {
  let response;
  let error = false;

  before((done) => {
    axios.get('http://localhost:7865')
         .then((res) => {
           response = res;
         })
         .catch((error) => { error = true })
         .finally(() => { done(); });
  });

  //test cases
  it('method is get', () => {
    assert.equal(response.request.method, 'GET');
  });

  it('request path is /', () => {
    assert.equal(response.request.path, '/');
  });

  it('status code should be 200', () => {
    assert.equal(response.status, 200);
  });

  it('response value should be a string', () => {
    assert.isString(response.data)
  });
  it('response value should be valid', () => {
    assert.isOk(response.data);
    assert.equal(response.data, 'Welcome to the payment system');
  });
});
