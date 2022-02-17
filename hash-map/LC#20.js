//  Valid Parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid0 = function (s) {
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

var isValid = function (s) {
  let map = new Map();
  let stack = [];
  map.set("(", ")");
  map.set("[", "]");
  map.set("{", "}");

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (map.has(char)) {
      stack.push(char);
    } else {
      let match = map.get(stack.pop());
      if (match !== char) return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid("()"));
// true

console.log(isValid("()[]{}"));
//true

console.log(isValid("({(}])"));
// false

console.log(isValid("["));
// false
