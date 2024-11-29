/* eslint-disable */
const expect = require('chai').expect;
const sinon = require('sinon');
const sendPayment = require('./3-payment');
const calculateNumber = require('./utils').calculateNumber;

describe('sendPaymentRequestToApi', () => {
  it('should be called with (100, 20)', () => {
    const sendPaymentSpy = sinon.spy(sendPayment);
    const calculateSpy = sinon.spy(calculateNumber);
    sendPayment(100, 20);
    expect(sendPaymentSpy.calledOnce);
    expect(sendPaymentSpy.calledOnceWith(100, 20));
    expect(calculateSpy.calledAfter(sendPaymentSpy));
  });
 });
