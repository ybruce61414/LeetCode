// 14. Longest Common Prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix0 = function (strs) {
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

var longestCommonPrefix1 = function (strs) {
  if (strs.length === 1) return strs[0];

  let mask = strs[0];
  let find = false;
  let pt = 0;

  while (pt < mask.length && !find) {
    let char = mask[pt];
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][pt] !== char) {
        find = true;
        pt -= 1;
        break;
      }
    }
    pt += 1;
  }

  return mask.slice(0, pt);
};

var longestCommonPrefix = function (strs) {
  let res = "";
  let mask = strs[0];

  for (let i = 0; i < mask.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || mask[i] !== strs[j][i]) {
        return res;
      }
    }
    res += mask[i];
  }

  return res;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
