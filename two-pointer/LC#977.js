// 977. Squares of a Sorted Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let ans = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      ans[i] = nums[left] ** 2;
      left += 1;
    } else {
      ans[i] = nums[right] ** 2;
      right -= 1;
    }
  }

  return ans;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
// [0,1,9,16,100]

console.log(sortedSquares([-7, -3, 2, 3, 11]));
// [4,9,9,49,121]

console.log(sortedSquares([-5, -3, -2, -1]));
// [1,4,9,25]
