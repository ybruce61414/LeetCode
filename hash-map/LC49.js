/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const result = [];
  const stringsMap = {};

  for (let i = 0; i < strs.length; i++) {
    let sortedStr = strs[i].split("").sort().join("");
    if (!stringsMap[sortedStr]) stringsMap[sortedStr] = [];
    stringsMap[sortedStr].push(strs[i]);
  }

  for (let j in stringsMap) {
    result.push(stringsMap[j]);
  }

  return result;
};

let input1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
let input2 = [""];

console.log(groupAnagrams(input2));
