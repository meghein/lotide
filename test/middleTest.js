//const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert
const middle = require('../middle')

describe("#middle", () => {

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [5, 6] for [4, 5, 6, 7]", () => {
    assert.deepEqual(middle([4,5,6,7]), [5,6]);
  });

  it("returns [30] for [10, 20, 30, 40, 50]", () => {
    assert.deepEqual(middle([10, 20, 30, 40, 50]), [30]);
  });

});

// TEST CODE
// console.log(assertArraysEqual(middle([5,6,7]), [6]));
// console.log(assertArraysEqual(middle([5,6,7,8]), [6,7]));
// console.log(assertArraysEqual(middle([5,6,7,8,9]), [7]));

