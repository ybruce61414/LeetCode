// 53. Maximum Subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // dp method explanation
  //  [-2,1,-3,4,-1,2,1,-5,4]
  //  [-2,1,-2,4, 3,5,6, 1,5]
  //  f[i] = f[i-1] > 0? nums[i] + f[i-1]: nums[i]

  // let dp = new Array(nums.length).fill(null);
  // let max = nums[0];
  // dp[0] = nums[0];
  //
  // for (let i = 1; i < nums.length; i++) {
  //   // dp[i] = dp[i - 1] > 0 ? nums[i] + dp[i - 1] : nums[i];
  //
  //   dp[i] = Math.max(nums[i] + dp[i - 1], nums[i]);
  //   max = Math.max(max, dp[i]);
  // }
  // return max;

  let max = nums[0];
  let sum = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    sum = Math.max(nums[i], sum + nums[i]);

    if (sum > max) max = sum;
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
