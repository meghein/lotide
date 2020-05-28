const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  // console.log(`Example label: ${inspect(actual)}`);
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    return `❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
  for (let key of Object.keys(actual)) {
    if (actual[key] !== expected[key]) {
      return `❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
    }
  }
  return `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba));

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc));
