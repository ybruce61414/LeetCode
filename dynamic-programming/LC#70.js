//  70. Climbing Stairs
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 0) return 0;
  let ans = Array.from({ length: n + 1 }, () => null);
  ans[0] = 1;
  ans[1] = 1;

  for (let i = 2; i < n + 1; i++) {
    ans[i] = ans[i - 1] + ans[i - 2];
  }

  return ans[n];
};

console.log(climbStairs(1));
