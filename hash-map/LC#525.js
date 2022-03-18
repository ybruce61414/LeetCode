// 525. Contiguous Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let map = new Map();
  let total = 0;
  let max = 0;

  map.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    total += nums[i] === 0 ? -1 : nums[i];

    if (map.has(total)) {
      max = Math.max(max, i - map.get(total));
    } else {
      map.set(total, i);
    }
  }

  return max;
};

console.log(findMaxLength([0, 1, 0]));
// 2

console.log(findMaxLength([1, 1, 1, 0, 1, 0, 0]));
// 6

console.log(findMaxLength([0, 1]));
// 2
