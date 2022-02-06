// 239. Sliding Window Maximum
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow0 = function (nums, k) {
  //brute force
  const res = [];

  for (let right = k - 1; right < nums.length; right++) {
    let left = right - k + 1;
    let max = -Infinity;

    for (let i = left; i <= right; i++) {
      if (nums[i] > max) max = nums[i];
    }

    res.push(max);
  }

  return res;
};

var maxSlidingWindow = function (nums, k) {
  //brute force
  const res = [];

  for (let right = k - 1; right < nums.length; right++) {}

  return res;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1], 1));
console.log(maxSlidingWindow([1, -1], 1));
