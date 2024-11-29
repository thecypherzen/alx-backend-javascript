/* eslint-disable */
const expect = require('chai').expect;
const sinon = require('sinon');
const sendPayment = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('stubbing calculateNumber', () => {
    const logSpy = sinon.spy(console, 'log');
    const calculateStub = sinon.stub(Utils, 'calculateNumber');
    calculateStub.returns(10);
    sendPayment(100, 20);
    expect(calculateStub.calledWith('SUM', 100, 20));
    expect(logSpy.calledWith('The total is: 10'));
  });
 });
