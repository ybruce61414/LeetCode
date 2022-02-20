/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome0 = function (s) {
  let startIndex = 0;
  let maxLength = 1;

  const expandAroundMiddle = (left, right) => {
    while (left > -1 && right < s.length && s[left] === s[right]) {
      let currLength = right - left + 1;
      if (currLength > maxLength) {
        maxLength = currLength;
        startIndex = left;
      }
      left -= 1;
      right += 1;
    }
  };

  for (let i = 0; i < s.length; i++) {
    //  odd length
    expandAroundMiddle(i - 1, i + 1);
    //  even length
    expandAroundMiddle(i, i + 1);
  }

  return s.slice(startIndex, startIndex + maxLength);
};

var longestPalindrome = function (s) {
  let start = 0;
  let maxLen = 1;

  const expandFromMiddle = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLen) {
        maxLen = right - left + 1;
        start = left;
      }
      left -= 1;
      right += 1;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expandFromMiddle(i, i);
    expandFromMiddle(i, i + 1);
  }

  return s.slice(start, start + maxLen);
};

const s = "babababaad";
console.log(longestPalindrome(s));
