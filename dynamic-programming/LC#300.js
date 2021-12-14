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
    } else {
      let idx = binarySearchIdx(res, nums[i]);
      res[idx] = nums[i];
    }
  }

  return res.length;
};

const binarySearchIdx = (arr, target) => {
  //find first larger or equal
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
};

console.log(lengthOfLIS2([7, 7, 7, 7, 7, 7, 7]));
console.log(lengthOfLIS2([0, 1, 0, 3, 2, 3]));
console.log(lengthOfLIS2([10, 9, 2, 5, 3, 7, 101, 18]));
//falied case
console.log(lengthOfLIS2([3, 5, 6, 2, 5, 4, 19, 5, 6, 7, 12]));

// console.log(binarySearchIdx([2, 3, 4, 10, 40], 5));
