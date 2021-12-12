//300. Longest Increasing Subsequence
/**
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS1 = function (nums) {
  //  method1: dp
  const dp = new Array(nums.length).fill(1);
  let maxSoFar = 0;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxSoFar = Math.max(maxSoFar, dp[i]);
  }
  return maxSoFar;
};

var lengthOfLIS2 = function (nums) {
  // to-do nlogn : using binary search
  let res = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      res.push(nums[i]);
    } else {
      let repIndex = res.indexOf(nums[i]);
      res[repIndex] = nums[i];
    }
  }
};

console.log(lengthOfLIS1([10, 9, 2, 5, 3, 7, 101, 18]));
