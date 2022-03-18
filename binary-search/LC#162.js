// 162. Find Peak Element
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement0 = function (nums) {
  let prev = null;
  let next = null;

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    prev = i === 0 ? -Infinity : nums[i - 1];
    next = i === nums.length - 1 ? -Infinity : nums[i + 1];

    if (curr > prev && curr > next) return i;
  }
};

var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (right > left) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

console.log(findPeakElement((nums = [1, 2, 3, 1])));
console.log(findPeakElement((nums = [1, 2, 1, 3, 5, 6, 4])));
