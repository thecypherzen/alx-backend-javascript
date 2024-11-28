/* Tests for 0-calcul */

const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
  it('Only first arg need rounding', () => {
    let result = calculateNumber(3.9, 0);
    assert.equal(result, 4);
  });

  it ('Only second arg need rounding', () => {
    let result = calculateNumber(1, 4.3);
    assert.equal(result, 5);
  });

  it('Both args need rounding', () => {
    let result = calculateNumber(1.1, 2.2);
    assert.equal(result, 3);
  });
});
