// 22. Generate Parentheses
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let stack = [];
  let res = [];

  const backtrack = (open, close) => {
    if (open === n && close === n) {
      res.push(stack.join(""));
    }

    if (open < n) {
      stack.push("(");
      backtrack(open + 1, close);
      stack.pop();
    }

    if (close < open) {
      stack.push(")");
      backtrack(open, close + 1);
      stack.pop();
    }
  };

  backtrack(0, 0);
  return res;
};

console.log(generateParenthesis(3));
// expected: ["((()))","(()())","(())()","()(())","()()()"]
