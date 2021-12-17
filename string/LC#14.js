// 14. Longest Common Prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // search the breaking index
  if (strs.length === 1) return strs[0];

  let same = strs[0];

  for (let i = 1; i < strs.length; i++) {
    const currStr = strs[i];
    let idx;
    for (idx = 0; idx < currStr.length; idx++) {
      if (same[idx] !== currStr[idx]) break;
    }
    same = same.slice(0, idx);
    if (same === "") return "";
  }
  return same;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
