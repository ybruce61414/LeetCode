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

var lengthOfLongestSubstring3 = function (s) {
  // template and most efficient way
  let map = new Map();
  let left = 0;
  let right = 0;
  let max = 0;

  while (right < s.length) {
    let char = s[right];
    map.set(char, (map.get(char) || 0) + 1);

    while (map.get(char) > 1) {
      map.set(s[left], map.get(s[left]) - 1);
      left += 1;
    }
    max = Math.max(max, right - left + 1);
    right += 1;
  }

  return max;
};

console.log(lengthOfLongestSubstring3("abba"));
console.log(lengthOfLongestSubstring3("abcabcbb"));
console.log(lengthOfLongestSubstring3("abcbdav"));
