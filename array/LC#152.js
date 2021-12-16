// 152. Maximum Product Subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let maxDp = nums[0];
  let minDp = nums[0];
  let res = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let temp = maxDp;

    maxDp = Math.max(nums[i], maxDp * nums[i], minDp * nums[i]);
    minDp = Math.min(nums[i], temp * nums[i], minDp * nums[i]);

    res = Math.max(maxDp, res);
  }
  return res;
};

console.log(maxProduct([-2, 3, -4]));
