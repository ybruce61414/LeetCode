// Longest Substring Without Repeating Characters
/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  const windowCharMap = {};
  let windowStart = 0;
  let maxlength = 0;

  for (let i = 0; i < s.length; i++) {
    let endChar = s[i];
    console.log(windowCharMap[endChar]);
    if (windowCharMap[endChar] >= windowStart) {
      windowStart = windowCharMap[endChar] + 1;
    }
    windowCharMap[endChar] = i;
    maxlength = Math.max(maxlength, i - windowStart + 1);
  }
  return maxlength;
};

console.log(lengthOfLongestSubstring("dvdf"));
