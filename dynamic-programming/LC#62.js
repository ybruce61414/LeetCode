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

console.log(uniquePaths(3, 2));
