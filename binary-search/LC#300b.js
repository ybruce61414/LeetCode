//300. Longest Increasing Subsequence
var lengthOfLIS1 = function (nums) {
  const dp = Array.from({ length: nums.length }, () => 1);
  let maxSoFar = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        dp[i] = Math.max(1 + dp[j], dp[i]);
      }
    }

    maxSoFar = Math.max(dp[i], maxSoFar);
  }

  return maxSoFar;
};

console.log(lengthOfLIS1([1, 3, 5, 2, 9]));
