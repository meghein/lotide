const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `❌❌❌ Assertion Failed: ${actual} !== ${expected}`;
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const namesObj = {};
  const namesArr = [];
  for (let item in itemsToCount) {
    if (itemsToCount[item] === true) {
      namesArr.push(item);
    }
  }
  // i === firstname
  for (let i of allItems) {
    if (namesArr.includes(i)) {
      if (namesObj[i]) {
        namesObj[i] += 1;
      } else {
        // needed it because it was undefined
        namesObj[i] = 1;
      }
    }
  }
  console.log(namesObj);
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);