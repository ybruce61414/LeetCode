//  Valid Parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let pairsMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (pairsMap[char]) {
      stack.push(char);
    } else {
      let popEl = stack.pop();
      if (pairsMap[popEl] !== char) return false;
    }
  }
  return stack.length === 0;
};

console.log(isValid("()"));
