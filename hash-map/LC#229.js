/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let threshold = Math.floor(nums.length / 3);
  let freqCounter = new Map();
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    freqCounter.set(nums[i], (freqCounter.get(nums[i]) || 0) + 1);
  }

  for (let [key, value] of freqCounter) {
    if (value > threshold) res.push(key);
  }
  return res;
};
