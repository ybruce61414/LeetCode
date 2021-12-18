// 628. Maximum Product of Three Numbers

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums.sort((a, b) => a - b);

  let length = nums.length;

  return nums[length - 1] * nums[length - 2] * nums[length - 3] >
    nums[0] * nums[1] * nums[length - 1]
    ? nums[length - 1] * nums[length - 2] * nums[length - 3]
    : nums[0] * nums[1] * nums[length - 1];
};
