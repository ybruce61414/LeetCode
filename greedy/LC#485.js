// 485. Max Consecutive Ones
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let temp = 0;

  for (let cur of nums) {
    if (cur) {
      temp += 1;
      max = Math.max(max, temp);
    } else {
      temp = 0;
    }
  }
  return max;
};
