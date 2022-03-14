// 150. Evaluate Reverse Polish Notation
var evalRPN = function (tokens) {
  let stack = [];
  let operators = ["+", "-", "*", "/"];

  for (let token of tokens) {
    if (operators.includes(token)) {
      let op2 = stack.pop();
      let op1 = stack.pop();

      switch (token) {
        case "+":
          op1 = op1 + op2;
          break;
        case "-":
          op1 = op1 - op2;
          break;
        case "*":
          op1 = Math.trunc(op1 * op2);
          break;
        case "/":
          op1 = Math.trunc(op1 / op2);
        default:
          break;
      }
      stack.push(op1);
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
};
