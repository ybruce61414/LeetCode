//198. House Robber
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let dp = Array.from({ length: nums.length + 1 }, () => null);
  if (nums.length === 1) {
    return nums[0];
  } else if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  } else {
    dp[1] = nums[0];
    dp[2] = Math.max(nums[0], nums[1]);
    for (let i = 3; i < nums.length + 1; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
    }
  }
  return dp[nums.length];
};

console.log(rob([2, 1, 1, 2]));
