// infix to postfix
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

console.log(evalRPN(["2", "1", "+", "3", "*"]));
// ((2 + 1) * 3) = 9

console.log(evalRPN(["4", "13", "5", "/", "+"]));
// (4 + (13 / 5)) = 6

console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);

// ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
//   = ((10 * (6 / (12 * -11))) + 17) + 5
//   = ((10 * (6 / -132)) + 17) + 5
//   = ((10 * 0) + 17) + 5
//   = (0 + 17) + 5
//   = 17 + 5
//   = 22
