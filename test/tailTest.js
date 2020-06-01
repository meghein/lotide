const assertEqual = require('../assertEqual');
const tail = require('../tail')

// TEST CODE
console.log(assertEqual(tail(["Hello", "Yo", "Lighthouse", "Labs"]).length, 3));
console.log(assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2));