// 209. Minimum Size Subarray Sum
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen0 = function (target, nums) {
  // brute force
  let min = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    if (sum >= target) min = Math.min(min, 1);

    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum >= target) {
        min = Math.min(min, j - i + 1);
        //break inner loop, outer loop continue
        break;
      }
    }
  }

  return min === Infinity ? 0 : min;
};

var minSubArrayLen = function (target, nums) {
  // sliding window
  let left = 0;
  let right = 0;
  let sum = 0;
  let min = Infinity;

  while (right < nums.length) {
    sum += nums[right];

    while (sum >= target) {
      min = Math.min(min, right - left + 1);
      sum -= nums[left];
      left += 1;
    }
    right += 1;
  }

  return min === Infinity ? 0 : min;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
console.log(minSubArrayLen(4, [1, 4, 4]));
// console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
