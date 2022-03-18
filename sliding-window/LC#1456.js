// 1456. Maximum Number of Vowels in a Substring of Given Length
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels0 = function (s, k) {
  // naive solution
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelMap = new Map();
  let winVowels = 0;
  let max = 0;

  for (let vowel of vowels) vowelMap.set(vowel, true);

  for (let i = 0; i < k - 1; i++) {
    if (vowelMap.has(s[i])) winVowels += 1;
  }

  for (let right = k - 1; right < s.length; right++) {
    let char = s[right];
    let leftChar = s[right - k + 1];

    if (vowelMap.has(char)) winVowels += 1;
    max = Math.max(max, winVowels);
    if (vowelMap.has(leftChar)) winVowels -= 1;
  }

  return max;
};

var maxVowels = function (s, k) {
  let vowels = ["a", "e", "i", "o", "u"];
  let charArr = new Array(26).fill(0);
  let total = 0;
  let max = 0;

  for (let vowel of vowels) {
    charArr[vowel.charCodeAt(0) - 97] = 1;
  }

  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    total += charArr[char.charCodeAt(0) - 97];
    if (right >= k) {
      total -= charArr[s[right - k].charCodeAt(0) - 97];
    }
    max = Math.max(max, total);
  }

  return max;
};

console.log(maxVowels("abciiidef", 3));
// 3

console.log(maxVowels("aeiou", 2));
// 2

console.log(maxVowels("leetcode", 3));
// 2

console.log(maxVowels("qempburycnhrvvccr", 13));
// 2

console.log(maxVowels("novowels", 1));
// 1
