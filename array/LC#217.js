//  217. Contains Duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const freqCounter = {};

  for (let i of nums) {
    freqCounter[i] = (freqCounter[i] || 0) + 1;
    if (freqCounter[i] !== 1) return true;
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
