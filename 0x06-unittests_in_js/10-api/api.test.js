const http = require('http');
const { assert } = require('chai');

/* eslint-disable */
describe('test cart page values', () => {
  describe('test cart page with good value', () => {
    let response;
    let data = '';
    let errors = {};
    before((done) => {
      http.get('http://localhost:7865/cart/12', (res) => {
      response = res;
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          data = JSON.parse(data.good);
        } catch (err) {
          errors.isJSON = false;
        }
        finally {
          done();
        }
      })
         .on('error', (err) => {
           errors.error = err;
           done();
         });
      });
    });
    //test cases
    it('method is get', () => {
      assert.equal(response.req.method, 'GET');
    });

    it('request path is /cart/12', () => {
      assert.equal(response.req.path, '/cart/12');
    });

    it('status code should be 200', () => {
      assert.equal(response.statusCode, 200);
    });

    it('response value should be a string', () => {
      assert.isString(data);
    });
    it('response value should be valid', () => {
      assert.isOk(data);
      assert.equal(data, 'Payment methods for cart 12');
    });
  });


  describe('test cart page with good value', () => {
    let response;
    let data = '';
    let errors = {};

    before((done) => {
      http.get('http://localhost:7865/cart/12ed', (res) => {
      response = res;
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          data = JSON.parse(data.good);
        } catch (err) {
          errors.isJSON = false;
        }
        finally {
          done();
        }
      })
         .on('error', (err) => {
           errors.error = err;
           done();
         });
      });
    });

    //test cases
    it('method is get', () => {
      assert.equal(response.req.method, 'GET');
    });
    it('request path is /cart/12ed', () => {
      assert.equal(response.req.path, '/cart/12ed');
    });

    it('status code should be 404', () => {
      assert.equal(response.statusCode, 404);
    });
    it('response value should be a string', () => {
      assert.isString(data);
    });
    it('response value should be valid', () => {
      assert.isOk(data);
      assert.equal(data.split('\n')[7],
                   '<pre>Cannot GET /cart/12ed</pre>');
    });
 });
});
