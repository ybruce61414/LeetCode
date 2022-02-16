/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams0 = function (strs) {
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

var groupAnagrams = function (strs) {
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    let sortedStr = strs[i].split("").sort().join("");

    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }
    map.get(sortedStr).push(strs[i]);
  }

  return [...map.values()];
};

let input1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
let input2 = [""];

console.log(groupAnagrams(input1));
// [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log(groupAnagrams(input2));
// [[""]]

// let a = ["a", "b", "v"];
// let map = new Map();
//
// map.set("arr", ["dd"]);
//
// map.get("arr").push("s");
// // map.set("arr", map.get("arr").push("ss"));
//
// console.log(map.get("arr"));
