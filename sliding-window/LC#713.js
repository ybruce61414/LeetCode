// 713. Subarray Product Less Than K
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;
  let left = 0;
  let right = 0;
  let count = 0;
  let prod = 1;

  while (right < nums.length) {
    prod *= nums[right];

    while (prod >= k) {
      prod /= nums[left];
      left += 1;
    }

    count += right - left + 1;
    right += 1;
  }
  return count;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
// 8

console.log(numSubarrayProductLessThanK([1, 1, 1], 1));
// 0

console.log(numSubarrayProductLessThanK([1, 2, 3], 0));
// 0
