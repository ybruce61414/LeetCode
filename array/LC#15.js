// 15. 3Sum
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    const target = 0 - nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (right > left) {
      if (nums[left] + nums[right] === target) {
        res.push([nums[left], nums[i], nums[right]]);
      } else if (nums[left] + nums[right] < target) {
        left += 1;
      } else {
        right += 1;
      }
    }
  }

  return nums;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
