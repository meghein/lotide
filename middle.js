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

const middle = function(array) {
  const results = [];
  if (array.length === 1 || array.length === 2) {
    return results;
  } else if (array.length % 2 !== 0) {
    const oddMiddle = Math.ceil(array.length / 2);
    results.push(array[oddMiddle - 1]);
  } else if (array.length % 2 === 0) {
    const evenMiddle = array.length / 2;
    results.push((array[evenMiddle - 1]), (array[evenMiddle]));
  }
  return results;
};