// 1525. Number of Good Ways to Split a String
/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function (s) {
  let originMap = new Map();
  let windowMap = new Map();
  let right = 0;
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    originMap.set(s[i], (originMap.get(s[i]) || 0) + 1);
  }

  while (right < s.length) {
    let char = s[right];
    windowMap.set(char, (windowMap.get(char) || 0) + 1);
    originMap.set(char, originMap.get(char) - 1);
    if (originMap.get(char) === 0) originMap.delete(char);
    if (originMap.size === windowMap.size) res += 1;

    right += 1;
  }

  return res;
};

console.log(numSplits("aacaba"));
// 2

console.log(numSplits("abcd"));
// 1
