//  217. Contains Duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate0 = function (nums) {
  const freqCounter = {};

  for (let i of nums) {
    freqCounter[i] = (freqCounter[i] || 0) + 1;
    if (freqCounter[i] !== 1) return true;
  }

  return false;
};

var containsDuplicate = function (nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return true;
    map.set(nums[i], 1);
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
