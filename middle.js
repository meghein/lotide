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

module.exports = middle