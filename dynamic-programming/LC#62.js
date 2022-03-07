//  62. Unique Paths
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let dp = new Array(n).fill(1);

  for (let j = 1; j < m; j++) {
    for (let i = 1; i < n; i++) {
      dp[i] = dp[i] + dp[i - 1];
    }
  }

  return dp[n - 1];
};

var numTrees2 = function (n) {
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      //left * right
      dp[i] += dp[j] * dp[i - 1 - j];
    }
  }
  return dp[n];
};

console.log(uniquePaths(3, 2));
