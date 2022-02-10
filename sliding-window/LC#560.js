// 560. Subarray Sum Equals K
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let left = 0;
  let right = 0;
  let temp = 0;
  let res = 0;

  while (right < nums.length) {
    temp += nums[right];

    while (temp > k && right > left) {
      console.log("in shrink---");
      temp -= nums[left];
      left += 1;
    }

    if (temp === k) res += 1;

    console.log("!!1");

    right += 1;
  }

  return res;
};
//
// console.log(subarraySum([1], 0));
// // 0

console.log(subarraySum([-1, -1, 1], 0));
// 1
