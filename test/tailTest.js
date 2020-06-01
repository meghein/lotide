// const assertEqual = require('../assertEqual');
const assert = require('chai').assert
const tail = require('../tail')

describe("#tail", () => {

  it("returns 3 for ['Hello', 'Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Yo", "Lighthouse", "Labs"]), ["Yo", "Lighthouse", "Labs"])
  })

  it("returns 2 for [' Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  })

});


// TEST CODE
// console.log(assertEqual(tail(["Hello", "Yo", "Lighthouse", "Labs"]).length, 3));
// console.log(assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2));