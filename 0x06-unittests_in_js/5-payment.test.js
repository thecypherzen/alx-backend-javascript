/* eslint-disable */
const expect = require('chai').expect;
const sinon = require('sinon');
const sendPayment = require('./5-payment');
const Utils = require('./utils');

describe('test sendPaymentRequestToApi', () => {
  let logSpy;

  beforeEach(() => {
    logSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('send with 100, 20', () => {
    sendPayment(100, 20);
    expect(logSpy.calledOnceWith('The total is: 120'));
  });

  it('send with 10, 10', () => {
    sendPayment(10, 10);
    expect(logSpy.calledOnceWith('The total is: 20'))
  });
 });
