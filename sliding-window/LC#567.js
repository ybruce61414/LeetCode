/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const len1 = s1.length;
  const len2 = s2.length;
  const counter1 = new Array(26).fill(0);
  const counter2 = new Array(26).fill(0);

  if (len1 > len2) return false;

  // init counter1
  for (let i = 0; i < len1; i++) {
    counter1[s1[i].charCodeAt(0) - 97] += 1;
  }

  // init counter2
  for (let i = 0; i < len1 - 1; i++) {
    counter2[s2[i].charCodeAt(0) - 97] += 1;
  }

  //sliding window
  for (let i = len1 - 1; i < len2; i++) {
    counter2[s2[i].charCodeAt(0) - 97] += 1;
    if (counter1.join("") === counter2.join("")) return true;
    counter2[s2[i - len1 + 1].charCodeAt(0) - 97] -= 1;
  }

  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("horse", "ros"));
