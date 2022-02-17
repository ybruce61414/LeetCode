// 409. Longest Palindrome
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let freqCounter = new Map();
  let hasOdd = false;
  let res = 0;

  for (let letter of s) {
    freqCounter.set(letter, (freqCounter.get(letter) || 0) + 1);
  }

  for (let num of freqCounter.values()) {
    if (num % 2 === 0) {
      res += num;
    } else {
      res += num - 1;
      hasOdd = true;
    }
  }

  return hasOdd ? res + 1 : res;
};

console.log(longestPalindrome("abccccdd"));
// 7

console.log(longestPalindrome("aAA"));
// 3
