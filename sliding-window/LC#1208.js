// 1208. Get Equal Substrings Within Budget
/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
  let left = 0;
  let right = 0;
  let windowCost = 0;
  let res = 0;

  while (right < s.length) {
    windowCost += Math.abs(s[right].charCodeAt(0) - t[right].charCodeAt(0));

    while (windowCost > maxCost) {
      windowCost -= Math.abs(s[left].charCodeAt(0) - t[left].charCodeAt(0));
      left += 1;
    }

    res = Math.max(res, right - left + 1);
    right += 1;
  }

  return res;
};

console.log(equalSubstring("abcd", "bcdf", 3));
// 3

console.log(equalSubstring("abcd", "cdef", 3));
// 1

console.log(equalSubstring("abcd", "acde", 0));
// 1
