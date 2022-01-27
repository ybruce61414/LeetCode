// 35. Search Insert Position
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (target > nums[nums.length - 1]) return nums.length;

  let left = 0;
  let right = nums.length - 1;

  while (right > left) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

console.log(searchInsert([1, 3, 5, 6], 7));
