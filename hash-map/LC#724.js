// 724. Find Pivot Index
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let totalSum = 0;
  let tempSum = 0;

  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    tempSum += nums[i - 1] || 0;

    if ((totalSum - nums[i]) / 2 === tempSum) return i;
  }

  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// 3

console.log(pivotIndex([1, 2, 3]));
// -1

console.log(pivotIndex([2, 1, -1]));
// 0
