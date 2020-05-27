const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `❌❌❌ Assertion Failed: ${actual} !== ${expected}`;
  }
};

const flatten = function(array) {
  let merged = [].concat.apply([], array)
  return merged;
}


// TEST CODE
console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
console.log(flatten(["hello", "ok", ["a", 4], true, [5.5]]))
console.log (assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), ([1, 2, 3, 4, 5, 6])));