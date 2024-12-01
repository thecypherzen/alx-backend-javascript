const http = require('http');
const { assert } = require('chai');

/* eslint-disable */
describe('test LOGIN and AVAILABLE_PAYMENTS endpoints', () => {
  describe('AVAILABLE_PAYMENTS route suite', () => {
    // good request test suite
    describe('GOOD request test suite', () => {
      let response = null;
      let resData = '';
      let errors = { http: false, json: false };

      before((done) => {
        http.get('http://localhost:7865/available_payments',
                 (res) => {
        response = res;
        res.on('data', (chunck) => {
          resData += chunck;
        });
        res.on('end', () => {
          try {
            resData = JSON.parse(resData);
          } catch(err) {
            errors.json = true;
          } finally{
            done();
          }
        })
           .on('error', (err) => {
             errors.http = true;
           });
        });
      });
      //test cases for good request
      it('status code is 200', () => {
        assert.equal(response.statusCode, 200);
      });
      it('path is /available_payments', () => {
        assert.equal(response.req.path, '/available_payments');
      });
      it('method is GET', () => {
        assert.equal(response.req.method, 'GET');
      });
      it('response data is object', () => {
        assert.isObject(resData);
      });
      it('response data is as expected', () => {
        assert.isOk(resData);
        assert.deepEqual(resData,
                         {payment_methods: {
                           credit_cards :true,
                           paypal:false
                         }});
      });
    });

    describe('BAD request test suite', () => {
      let response = null;
      let resData = null;
      let errors = { http: false, json: false };

      before((done) => {
        http.get('http://localhost:7865/available_payment',
                 (res) => {
        response = res;
        res.on('data', (data) => {})
        res.on('end', () => {
          if(res.statusCode !== 200) {
            errors.http = true;
          }
          done();
        })
           .on('error', (err) => {
             errors.http = true;
             console.log(errors);
             done();
           });
        });
      });
      //test cases for good request
      it('status code is 400', () => {
        assert.equal(response.statusCode, 404);
      });
      it('method is GET', () => {
        assert.equal(response.req.method, 'GET');
      });
      it('response data is not okay', () => {
        assert.isNotOk(resData);
        assert.isTrue(errors.http);
      });
    });
  });

  // login route testsuite
  describe('LOGIN route suite', () => {
    describe('GOOD request test suite', () => {
      // setup before hook
      const username = 'bliken lights';
      const config = {
        request : null,
        response: null,
        resData: '',
        payload: JSON.stringify({ userName: `${ username }` }),
        error: false,
      }

      before((done) => {
        config.request = http.request(
          {
            method: 'POST',
            hostname: 'localhost',
            port: 7865,
            path: '/login',
            headers: {
              'Content-Type': 'application/json',
              'Content-Length': config.payload.length,
            },
          },
          (response) => {
            config.response = response;
            response.on('data', (chunk) => { config.resData += chunk; });
            response.on('end', () => { done(); });
            response.on('error', () => { config.error = true; });
          }
        );
        config.request.write(config.payload);
        config.request.end();
      });
      // test cases
      it('request was a POST', () => {
        assert.isTrue(config.response.req.method === 'POST');
      });
      it('status code is 200 and no error', () => {
        assert.isTrue(config.response.statusCode === 200);
        assert.isFalse(config.error);
      });
      it('response data is string and valid', () => {
        assert.isString(config.resData);
        assert.equal(config.resData, `Welcome ${ username }`);
      });
    });

    describe('LOGIN with BAD request suite', () => {
      // setup before hook
      const setup = {
        payload: '',
        request: null,
        response: null,
        error: false,
        resData: '',
      }
      before((done) => {
        setup.request = http.request(
          {
            hostname: 'localhost',
            port: 7865,
            path: '/login',
            method: 'POST',
          }, (res) => {
            setup.response = res;
            res.on('data', (chunk) => { setup.resData += chunk });
            res.on('end', () => {
              if (res.statusCode !== 200) {
                setup.error = true;
              }
              done()
            });
            res.on('error', () => { setup.error = true; done() });
          });
        setup.request.write('');
        setup.request.end();
      });
      // test cases
      it('request method is post', () => {
        assert.isTrue(setup.response.req.method === 'POST');
      });
      it('status code is 400', () => {
        assert.isTrue(setup.response.statusCode === 400);
      });
      it('no response data is sent back', () => {
        assert.isNotOk(setup.resData);
      });
      it('error is true', () => {
        assert.isTrue(setup.error);
      });
    });
  });
});
