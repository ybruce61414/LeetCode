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

class MQ {
  constructor() {
    this.val = [];
  }

  peekFirst() {
    return this.val[0];
  }

  removeFirst() {
    return this.val.shift();
  }

  enqueue(val) {
    this.val.push(val);
  }

  peekLast() {
    return this.val[this.val.length - 1];
  }

  removeLast() {
    return this.val.pop();
  }

  isEmpty() {
    return this.val.length === 0;
  }
}

var shortestSubarray = function (nums, k) {
  let preSum = new Array(nums.length + 1);
  let mq = new MQ();
  let minLen = Infinity;

  preSum[0] = 0;
  for (let i = 1; i <= nums.length; i++) {
    preSum[i] = preSum[i - 1] + nums[i - 1];
  }

  for (let i = 0; i <= preSum.length; i++) {
    while (!mq.isEmpty() && preSum[i] <= preSum[mq.peekLast()]) {
      mq.removeLast();
    }

    while (!mq.isEmpty() && preSum[i] - preSum[mq.peekFirst()] >= k) {
      minLen = Math.min(minLen, i - mq.removeFirst());
    }

    mq.enqueue(i);
  }

  return minLen === Infinity ? -1 : minLen;
};

console.log(shortestSubarray([2, -1, 2], 3));
// 3

console.log(shortestSubarray([1, 2], 4));
// -1
