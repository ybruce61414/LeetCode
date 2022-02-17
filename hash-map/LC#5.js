/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
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

const s = "babababaad";
console.log(longestPalindrome(s));
