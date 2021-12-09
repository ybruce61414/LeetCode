const factorial = (num) => {
  let ans = [];
  ans[0] = 0;
  ans[1] = 1;

  for (let i = 2; i < num + 1; i++) {
    ans[i] = ans[i - 1] * i;
  }

  return ans[num];
};

console.log(factorial(5));
