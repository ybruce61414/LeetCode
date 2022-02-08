// 268. Missing Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let arr = new Array(nums.length + 1).fill(1);

  for (let num of nums) arr[num] -= 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) return i;
  }
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
// 8

console.log(missingNumber([3, 0, 1]));
// 2
