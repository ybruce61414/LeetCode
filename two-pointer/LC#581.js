// 581. Shortest Unsorted Continuous Subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray0 = function (nums) {
  //compare two array
  if (nums.length === 1) return 0;
  let copy = [...nums];
  copy.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;
  let rstop = false;
  let lstop = false;

  while ((!rstop || !lstop) && right > left) {
    if (copy[right] === nums[right]) {
      right -= 1;
    } else {
      rstop = true;
    }
    if (copy[left] === nums[left]) {
      left += 1;
    } else {
      lstop = true;
    }
  }

  return left === right ? 0 : right - left + 1;
};

var findUnsortedSubarray1 = function (nums) {
  //compare two array (smart way)
  let copy = [...nums];
  copy.sort((a, b) => a - b);

  let start = nums.length - 1;
  let end = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== copy[i]) {
      start = Math.min(start, i);
      end = Math.max(end, i);
    }
  }

  return end - start > 0 ? end - start + 1 : 0;
};

var findUnsortedSubarray = function (nums) {
  let start = nums.length - 1;
  let end = 0;
  let max = nums[0];
  let min = nums[nums.length - 1];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < max) {
      end = i;
    } else {
      max = nums[i];
    }

    if (nums[nums.length - 1 - i] > min) {
      start = nums.length - 1 - i;
    } else {
      min = nums[nums.length - 1 - i];
    }
  }

  // for (let j = nums.length - 1; j >=0; j--) {
  //     if (nums[j] > min) {
  //         start = j;
  //     } else {
  //         min = nums[j];
  //     }
  // }

  return end - start <= 0 ? 0 : end - start + 1;
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
// 5

console.log(findUnsortedSubarray([1, 2, 3, 4]));
// 0

console.log(findUnsortedSubarray([1]));
// 0

console.log(findUnsortedSubarray([1, 2, 3, 3, 3]));
// 0

console.log(findUnsortedSubarray([1, 2, 3, 5, 4]));
// 2
