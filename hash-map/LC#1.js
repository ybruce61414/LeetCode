// 1. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum0 = function (nums, target) {
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

var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [i, map.get(target - nums[i])];
    }
    map.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
// [0,1]

console.log(twoSum([3, 2, 4], 6));
// [1,2]

console.log(twoSum([3, 3], 6));
// [0,1]
