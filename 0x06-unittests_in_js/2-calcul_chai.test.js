/* Tests for 0-calcul */
/* eslint-disable  */

const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('type is ADD and first arg only', () => {
    const result = calculateNumber('SUM', 3.9, 0);
    expect(result).to.equal(4);
    expect(result).to.be.a('number');
  });

  it('type is SUBTRACT, second arg need rounding', () => {
    const result = calculateNumber('SUBTRACT', 1, 4.3);
    expect(result).to.equal(-3);
    expect(result).to.be.a('number');
  });

  it('type is DIVIDE, both args need rounding', () => {
    const result = calculateNumber('DIVIDE', 3.3, 2.2);
    expect(result).to.equal(1.5);
    expect(result).to.be.a('number');
  });

  it('type is DIVIDE, b is 0', () => {
    const result = calculateNumber('DIVIDE', 4.9, 0);
    expect(result).to.equal('Error');
    expect(result).to.be.a('string');
  });

  it('unsupported type', () => {
    const result = calculateNumber('MULTIPLY', 5.43, 3.732);
    expect(result).to.equal('Error');
    expect(result).to.be.a('string');
  });
});
