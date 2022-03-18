//55. Jump Game
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump1 = function (nums) {
  // dp method
  let dpPositions = new Array(nums.length).fill(false);
  dpPositions[0] = true;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dpPositions[j] && j + nums[j] >= i) {
        dpPositions[i] = true;
        break;
      }
    }
  }
  return dpPositions[nums.length - 1];
};

var canJump2 = function (nums) {
  // greedy method
  if (nums.length === 1) return true;

  let maxPosition = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxPosition) return false;
    if (maxPosition >= nums.length - 1) return true;
    maxPosition = Math.max(maxPosition, nums[i] + i);
  }
};

var canJump3 = function (nums) {
  let prev = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (i > prev) return false;
    prev = Math.max(prev, i + nums[i]);
    if (prev >= nums.length - 1) return true;
  }

  return true;
};

// console.log(canJump1([3, 2, 1, 0, 4]));
console.log(canJump2([2, 3, 1, 1, 4]));
