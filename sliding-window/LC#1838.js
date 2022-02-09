// 1838. Frequency of the Most Frequent Element
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Return the maximum possible frequency of an element after performing at most k operations.

var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = 0;
  let windowSum = 0;
  let max = 0;

  while (right < nums.length) {
    let target = nums[right];
    let targetSum = target * (right - left + 1);
    windowSum += target;

    while (targetSum - windowSum > k) {
      targetSum -= target;
      windowSum -= nums[left];
      left += 1;
    }

    max = Math.max(max, right - left + 1);
    right += 1;
  }

  return max;
};

console.log(maxFrequency([1, 2, 4], 5));
// 3

console.log(maxFrequency([1, 4, 8, 13], 5));
// 2

// let a = [4, 3, 2, 1];
// a.sort((a, b) => {
//   console.log(a, b);
//   return a - b;
// });
// console.log(a);
