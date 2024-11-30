const http = require('http');
const { assert } = require('chai');

/* eslint-disable */
describe('test api if successful', () => {
  let response;
  let resData = '';
  let error = false;

  before((done) => {
    http.get('http://localhost:7865', (res) => {
      response = res;
      res.on('data', (chunk) => {
        resData += chunk;
      });
      res.on('end', () => {
        try {
          resData = JSON.parse(resData);
        } catch (err) {
          // do nothing here...
        }
        finally {
          done();
        }
      })
         .on('error', (err) => { console.log('error'); });
    });
  });

  //test cases
  it('method is get', () => {
    assert.equal(response.req.method, 'GET');
  });

  it('request path is /', () => {
    assert.equal(response.req.path, '/');
  });

  it('status code should be 200', () => {
    assert.equal(response.statusCode, 200);
  });

  it('response value should be a string', () => {
    assert.isString(resData);
  });
  it('response value should be valid', () => {
    assert.isOk(resData);
    assert.equal(resData, 'Welcome to the payment system');
  });
});
