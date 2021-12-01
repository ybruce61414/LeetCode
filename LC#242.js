//  Valid Anagram
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// method1
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//
//   let freqCounter = {};
//   for (let i = 0; i < s.length; i++) {
//     let sChar = s[i];
//     freqCounter[sChar] = (freqCounter[sChar] || 0) + 1;
//   }
//
//   for (let j = 0; j < t.length; j++) {
//     let tChar = t[j];
//     if (!(tChar in freqCounter)) {
//       return false;
//     } else {
//       freqCounter[tChar] -= 1;
//       if (freqCounter[tChar] < 0) return false;
//     }
//   }
//   return true;
// };

// method2
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const charMap = {};

  for (let i = 0; i < s.length; i++) {
    charMap[s[i]] = (charMap[s[i]] || 0) + 1;
    charMap[t[i]] = (charMap[t[i]] || 0) - 1;
  }

  for (let key in charMap) {
    if (charMap[key] !== 0) return false;
  }

  return true;
};

console.log(isAnagram("aacc", "acca"));
