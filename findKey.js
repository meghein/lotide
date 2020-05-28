// Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

const findKey = (obj, callback) => {
  for (let key in obj) {
    //console.log(obj[key])
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};



const object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}
const result = findKey(object, x => x.stars === 2) // => "noma"

console.log(result);



//TEST WITH ASSERTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `❌❌❌ Assertion Failed: ${actual} !== ${expected}`;
  }
};

console.log(assertEqual(findKey(object, x => x.stars === 2), "noma"));
console.log(assertEqual(findKey(object, x => x.stars === 3), "Akaleri"));
console.log(assertEqual(findKey(object, x => x.rating), undefined));
console.log(assertEqual(findKey(object, x => x.stars === 1), "Blue Hill"));
