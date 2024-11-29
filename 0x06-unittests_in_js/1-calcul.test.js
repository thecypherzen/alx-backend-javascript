/* Tests for 0-calcul */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */

describe('calculateNumber', () => {
  it('type is ADD and first arg only', () => {
    const result = calculateNumber('SUM', 3.9, 0);
    assert.equal(result, 4);
  });

  it('type is SUBTRACT, second arg need rounding', () => {
    const result = calculateNumber('SUBTRACT', 1, 4.3);
    assert.equal(result, -3);
  });

  it('type is DIVIDE, both args need rounding', () => {
    const result = calculateNumber('DIVIDE', 3.3, 2.2);
    assert.equal(result, 1.5);
  });

  it('type is DIVIDE, b is 0', () => {
    const result = calculateNumber('DIVIDE', 4.9, 0);
    assert.equal(result, 'Error');
  });

  it('unsupported type', () => {
    const result = calculateNumber('MULTIPLY', 5.43, 3.732);
    assert.equal(result, 'Error');
  });
});
