// 424. Longest Repeating Character Replacement
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement0 = function (s, k) {
  //brute force method
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let count = {};
    count[s[i]] = 1;

    for (let j = i + 1; j < s.length; j++) {
      count[s[j]] = (count[s[j]] ? count[s[j]] : 0) + 1;
      let maxFreq = 0;
      for (let value of Object.values(count)) {
        if (value > maxFreq) maxFreq = value;
      }
      if (j - i + 1 - maxFreq <= k) {
        max = Math.max(max, j - i + 1);
      }
    }
  }
  return max;
};

var characterReplacement = function (s, k) {
  //sliding window
  let count = {};
  let left = 0;
  let maxLength = 0;
  let maxCharFreq = 0;

  for (let right = 0; right < s.length; right++) {
    let char = s[right];

    //update count
    count[char] = (count[char] || 0) + 1;
    maxCharFreq = Math.max(maxCharFreq, count[char]);

    while (right - left + 1 - maxCharFreq > k) {
      //move left pointer, update count
      count[s[left]] -= 1;
      left += 1;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

console.log(characterReplacement("AABABBA", 1));
// console.log(characterReplacement("ABAB", 2));
