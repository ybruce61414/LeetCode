// 953. Verifying an Alien Dictionary
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const letterHash = {};
  for (let i = 0; i < order.length; i++) {
    const letter = order[i];
    letterHash[letter] = i;
  }

  for (let i = 0; i < words.length - 1; i++) {
    let firstWord = words[i];
    let secondWord = words[i + 1];

    for (let i = 0; i < Math.max(firstWord.length, secondWord.length); i++) {
      // if word a is prefix of word b, b must be after word a
      if (i > secondWord.length - 1) {
        // ['apple', 'app']
        return false;
      }

      if (letterHash[firstWord[i]] > letterHash[secondWord[i]]) {
        return false;
      }

      if (letterHash[firstWord[i]] < letterHash[secondWord[i]]) {
        break;
      }
    }
  }
  return true;
};

console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
