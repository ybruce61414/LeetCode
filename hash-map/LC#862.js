// 862. Shortest Subarray with Sum at Least K
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray0 = function (nums, k) {
  //brute force
  let min = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum >= k) {
        min = Math.min(min, j - i + 1);
      }
    }
  }
  return min === Infinity ? -1 : min;
};

var shortestSubarray = function (nums, k) {
  // pending
  let preSum = new Array(nums.length).fill(0);
  let mq = [];
  let min = -1;

  for (let i = 0; i < nums.length; i++) {
    preSum[i] += (preSum[i - 1] || 0) + nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    while (mq.length !== 0 && preSum[i] < preSum[mq[mq.length - 1]]) {
      mq.pop();
    }

    while (mq.length !== 0 && preSum[i] - preSum[mq[0]] >= k) {
      min = Math.min(min, i - mq.shift());
    }

    mq.push(i);
  }

  return min;
};

console.log(shortestSubarray([2, -1, 2], 3));
// 3

console.log(shortestSubarray([1, 2], 4));
// -1
