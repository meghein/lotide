const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `❌❌❌ Assertion Failed: ${actual} !== ${expected}`;
  }
};

const countLetters = function(str) {
  const result = {};
  const noSpaces = str.split(" ").join("");
  for (let letter of noSpaces) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

const results = countLetters("lighthouse labs")



// TEST CODE
console.log(assertEqual(results["l"], (2)));
console.log(assertEqual(results["i"], (1)));
console.log(assertEqual(results["g"], (1)));
console.log(assertEqual(results["s"], (2)));