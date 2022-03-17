// infix to prefix
var evalPRE = function (tokens) {
  let stack = [];
  let operators = ["+", "-", "*", "/"];

  for (let i = tokens.length - 1; i >= 0; i--) {
    let token = tokens[i];
    if (operators.includes(token)) {
      let op1 = stack.pop();
      let op2 = stack.pop();

      switch (token) {
        case "+":
          op1 = op1 + op2;
          break;
        case "-":
          op1 = op1 - op2;
          break;
        case "*":
          op1 = op1 * op2;
          break;
        case "/":
          op1 = op1 / op2;
          break;
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

console.log(evalPRE(["+", "9", "*", "2", "6"]));
// 21

console.log(evalPRE(["-", "+", "8", "/", "6", "3", "2"]));
// 8

console.log(evalPRE(["-", "+", "7", "*", "4", "5", "+", "2", "0"]));
// 25
