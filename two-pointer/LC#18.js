// 18. 4Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let len = nums.length;
  let res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) {
      continue;
    }

    if (i === 0 || nums[i] !== nums[i - 1]) {
      for (let j = i + 1; j < len - 1; j++) {
        if (nums[i] + nums[j] + nums[len - 1] + nums[len - 2] < target) {
          continue;
        }
        let left = j + 1;
        let right = len - 1;

        if (j === i + 1 || nums[j] !== nums[j - 1]) {
          while (right > left) {
            let sum = nums[i] + nums[j] + nums[left] + nums[right];

            if (sum === target) {
              res.push([nums[i], nums[j], nums[left], nums[right]]);
              while (left < right && nums[left] === nums[left + 1]) {
                left += 1;
              }
              left += 1;

              while (left < right && nums[right] === nums[right - 1]) {
                right -= 1;
              }
              right -= 1;
            } else if (sum < target) {
              left += 1;
            } else {
              right -= 1;
            }
          }
        }
      }
    }
  }

  return res;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
// [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
