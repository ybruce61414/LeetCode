// 15. 3Sum
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const target = 0 - nums[i];
    let l = i + 1;
    let r = nums.length - 1;

    while (r > l) {
      if (nums[l] + nums[r] === target) {
        res.push([nums[i], nums[l], nums[r]]);
        l += 1;
        r -= 1;
        while (nums[l] === nums[l - 1]) {
          l += 1;
        }
      } else if (nums[l] + nums[r] < target) {
        l += 1;
      } else {
        r -= 1;
      }
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
