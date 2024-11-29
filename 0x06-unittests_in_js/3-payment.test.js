/* eslint-disable */
const expect = require('chai').expect;
const sinon = require('sinon');
const sendPayment = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('sendPaymentRequest uses Utils.calculateNumber', () => {
    const sendPaymentSpy = sinon.spy(sendPayment);
    const calculateSpy = sinon.spy(Utils, 'calculateNumber');
    sendPayment(100, 20);
    expect(sendPaymentSpy.calledOnce);
    expect(sendPaymentSpy.calledOnceWith(100, 20));
    expect(calculateSpy.calledAfter(sendPaymentSpy));
    expect(calculateSpy.calledWith('SUM', 100, 20));
  });
 });
