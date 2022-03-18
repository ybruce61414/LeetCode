// 76. Minimum Window Substring
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let map = {};
  let uniqueChars = 0;
  let validCount = 0;
  let left = 0;
  let right = 0;
  let res = "";

  // init map of t
  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]]) {
      map[t[i]] = 0;
      uniqueChars += 1;
    }
    map[t[i]] += 1;
  }

  while (right < s.length) {
    let char = s[right];

    // update map
    if (char in map) {
      map[char] -= 1;
      if (map[char] === 0) validCount += 1;
    }

    while (validCount === uniqueChars) {
      if (res.length === 0 || res.length > right - left + 1) {
        res = s.slice(left, right + 1);
      }
      if (s[left] in map) {
        map[s[left]] += 1;
        if (map[s[left]] > 0) validCount -= 1;
      }
      left += 1;
    }
    right += 1;
  }

  return res;
};

console.log(minWindow("axxaxbxcax", "abc"));
console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "b"));
console.log(minWindow("abcdebdde", "bde"));
