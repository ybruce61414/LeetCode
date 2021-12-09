//213. House Robber II
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const maxMoney = (numList) => {
    let dp = Array.from({ length: numList.length + 1 }, () => null);
    if (numList.length === 1) {
      return numList[0];
    } else if (numList.length === 2) {
      return Math.max(numList[0], numList[1]);
    } else {
      dp[1] = numList[0];
      dp[2] = Math.max(numList[0], numList[1]);
      for (let i = 3; i < numList.length + 1; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + numList[i - 1]);
      }
    }
    return dp[numList.length];
  };

  if (nums.length === 1) {
    return nums[0];
  } else {
    let exceptFirst = maxMoney(nums.slice(1));
    let exceptLast = maxMoney(nums.slice(0, nums.length - 1));

    return Math.max(exceptFirst, exceptLast);
  }
};

console.log(rob([10]));
