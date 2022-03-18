//198. House Robber
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob0 = function (nums) {
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

var rob = function (nums) {
  let dp = new Array(nums.length + 1).fill(0);
  dp[1] = nums[0];
  dp[2] = nums[1];

  let max = nums[1] !== undefined && nums[1] > nums[0] ? nums[1] : nums[0];

  for (let i = 2; i < nums.length; i++) {
    dp[i + 1] = nums[i] + Math.max(dp[i - 1], dp[i - 2]);
    max = Math.max(dp[i + 1], max);
  }

  return max;
};

console.log(rob([2, 1, 1, 2]));
