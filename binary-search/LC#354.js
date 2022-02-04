// 354. Russian Doll Envelopes
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes0 = function (envelopes) {
  envelopes.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });

  const heights = envelopes.map((envelope) => envelope[1]);
  let dp = Array.from({ length: heights.length }, () => 1);
  let maxSoFar = 1;

  // LIS of heights
  for (let i = 1; i < heights.length; i++) {
    for (let j = 0; j < i; j++) {
      if (heights[j] < heights[i]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
    maxSoFar = Math.max(maxSoFar, dp[i]);
  }

  return maxSoFar;
};

var maxEnvelopes = function (envelopes) {
  envelopes.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });

  const heights = envelopes.map((envelope) => envelope[1]);
  let res = [heights[0]];

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] > res[res.length - 1]) {
      res.push(heights[i]);
    } else {
      let idx = findFirstLargerOrEqual(res, heights[i]);
      res.splice(idx, 1, heights[i]);
    }
  }
  return res.length;
};

const findFirstLargerOrEqual = (nums, target) => {
  let left = 0;
  let right = nums.length;

  while (right > left) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

console.log(
  maxEnvelopes([
    [5, 4],
    [6, 4],
    [6, 7],
    [2, 3],
  ])
);

console.log(maxEnvelopes([[1, 1]]));
