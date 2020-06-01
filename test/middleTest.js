const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle')

// TEST CODE
console.log(assertArraysEqual(middle([5,6,7]), [6]));
console.log(assertArraysEqual(middle([5,6,7,8]), [6,7]));
console.log(assertArraysEqual(middle([5,6,7,8,9]), [7]));

