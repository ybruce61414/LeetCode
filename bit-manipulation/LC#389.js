// 389. Find the Difference
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference0 = function (s, t) {
  let map = new Map();

  for (let word of t) {
    map.set(word, (map.get(word) || 0) + 1);
  }

  for (let word of s) {
    map.set(word, map.get(word) - 1);
  }

  for (let [key, val] of map.entries()) {
    if (val !== 0) return key;
  }
};

var findTheDifference = function (s, t) {
  let sum = 0;

  for (let word of t) {
    sum += word.charCodeAt(0);
  }

  for (let word of s) {
    sum -= word.charCodeAt(0);
  }

  return String.fromCharCode(sum);
};

console.log(findTheDifference("abcd", "abcde"));
// e
