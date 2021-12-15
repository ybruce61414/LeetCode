// 1. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //  using hash map to memorize data
  let numsVisited = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (complement in numsVisited) {
      return [i, numsVisited[complement]];
    } else {
      numsVisited[num] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
