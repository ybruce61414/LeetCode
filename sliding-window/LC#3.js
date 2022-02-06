// Longest Substring Without Repeating Characters
/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring1 = function (s) {
  const windowCharMap = {};
  let windowStart = 0;
  let maxlength = 0;

  for (let i = 0; i < s.length; i++) {
    let endChar = s[i];

    if (windowCharMap[endChar] >= windowStart) {
      windowStart = windowCharMap[endChar] + 1;
    }

    windowCharMap[endChar] = i;
    maxlength = Math.max(maxlength, i - windowStart + 1);
  }
  return maxlength;
};

var lengthOfLongestSubstring2 = function (s) {
  const map = {};
  let start = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (map[char] !== undefined && map[char] >= start) {
      start = map[char] + 1;
    }

    map[char] = i;
    max = Math.max(max, i - start + 1);
  }

  return max;
};

// console.log(lengthOfLongestSubstring2("abba"));
console.log(lengthOfLongestSubstring2("abcabcbb"));
