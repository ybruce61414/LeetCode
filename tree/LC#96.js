// 96. Unique Binary Search Trees
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += +dp[j] * dp[i - 1 - j];
    }
  }

  return dp[n];
};

console.log(numTrees(3));

// Input: n = 3
// Output: 5
