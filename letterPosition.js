const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char !== " ") {
      results[char] ? results[char].push(i) : results[char] = [sentence.indexOf(char)];
    }
  }

  return results;
};

const result = letterPositions("hello");

console.log(result)


