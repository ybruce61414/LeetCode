//example1
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

// example2
const fib1 = (num) => {
  // recursive way
  const dp = [0, 1, 1];

  const helper = (num) => {
    if (dp[num]) return dp[num];

    let res = helper(num - 1) + helper(num - 2);
    dp[num] = res;
    return res;
  };

  return helper(num);
};

console.log(fib1(7));

const fib2 = (num) => {
  // bottom up
  const dp = [0, 1, 1];

  for (let i = 3; i <= num; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return dp[num];
};

console.log(fib2(7));
