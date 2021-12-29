// 169. Majority Element
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let freqCounter = {};

  for (let i = 0; i < nums.length; i++) {
    let char = nums[i];
    freqCounter[char] = (freqCounter[char] || 0) + 1;

    if (freqCounter[char] > Math.floor(nums.length / 2)) return char;
  }
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
