//  287. Find the Duplicate Number
//  You must solve the problem without modifying the array nums and uses only constant extra space.
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate1 = function (nums) {
  //  brute force method
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return nums[i];
    }
  }
  return null;
};

var findDuplicate2 = function (nums) {};

console.log(findDuplicate2([1, 3, 4, 2, 2]));
