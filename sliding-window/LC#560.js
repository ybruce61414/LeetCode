// 560. Subarray Sum Equals K
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let map = new Map();
  let totalSum = 0;
  let count = 0;

  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];

    if (map.has(totalSum - k)) {
      count += map.get(totalSum - k);
    }

    map.set(totalSum, (map.get(totalSum) || 0) + 1);
  }

  return count;
};

console.log(subarraySum([1], 0));
// 0

console.log(subarraySum([1, 1, 1], 2));
// 2

console.log(subarraySum([1, 2, 3], 3));
// 2

console.log(subarraySum([-1, -1, 1], 0));
// 1

console.log(subarraySum([1, 4, 10, -6, -4, 3, 2], 3));
// 1

console.log(subarraySum([-4, -100, 3], 3));
// 1
