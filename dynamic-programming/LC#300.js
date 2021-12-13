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
    if (nums[i] > res[res.length - 1]) {
      res.push(nums[i]);
    } else if (nums[i] < res[0]) {
      res[0] = nums[i];
    } else {
      let left = 0;
      let right = res.length - 1;
      let mid;
      while (right > left) {
        mid = Math.floor((right + left) / 2);
        if (res[mid] < nums[i]) left = mid + 1;
        else if (res[mid] > nums[i]) right = mid - 1;
        else right = mid;
      }
      res[right] = nums[i];
    }
  }

  return res.length;
};

// const binarySearch = (nums, target) => {
//   //  iteration
//   let left = 0;
//   let right = nums.length - 1;
//   let mid;
//
//   if (nums.length === 1) return Math.floor((right + left) / 2);
//   if (nums.length === 0) return undefined;
//
//   while (right > left) {
//     mid = Math.floor((right + left) / 2);
//     if (nums[mid] < target) {
//       left = mid + 1;
//     } else if (nums[mid] > target) {
//       right = mid - 1;
//     } else {
//       return mid;
//     }
//   }
//   return left;
// };
//
// console.log(binarySearch([3, 10], 8));
console.log(lengthOfLIS2([4, 10, 4, 3, 8, 9]));
console.log(lengthOfLIS2([10, 9, 2, 5, 3, 7, 101, 18]));
//falied case
console.log(lengthOfLIS2([3, 5, 6, 2, 5, 4, 19, 5, 6, 7, 12]));
