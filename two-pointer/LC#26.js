// 26. Remove Duplicates from Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let pt = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[pt] !== nums[i]) {
      pt += 1;
      nums[pt] = nums[i];
    }
  }
  return pt + 1;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// [0,1,2,3,4,_,_,_,_,_]
