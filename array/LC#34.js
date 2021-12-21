// 34. Find First and Last Position of Element in Sorted Array
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange1 = function (nums, target) {
  let right = findFirstGreaterOrEqual(nums, target + 1);
  let left = findFirstGreaterOrEqual(nums, target);

  if (left === right && nums[left] !== target) {
    return [-1, -1];
  } else if (right !== left && nums[right] !== target) {
    right = right - 1;
  }

  return [left, right];
};

var searchRange2 = function (nums, target) {
  let right = findFirstGreater(nums, target);
  let left = findFirstGreaterOrEqual(nums, target);

  if (right === left && nums[left] !== target) return [-1, -1];
  if (nums[right] !== target) right = right - 1;

  return [left, right];
};

const findFirstGreater = (arr, target) => {
  //find the first element greater than the target
  let l = 0;
  let r = arr.length - 1;

  while (r > l) {
    let mid = Math.floor((l + r) / 2);

    if (target >= arr[mid]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return r;
};

const findFirstGreaterOrEqual = (arr, target) => {
  //find the first element equal or greater than the target
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return r;
};

console.log(searchRange2([5, 7, 7, 8, 8, 10], 8));
//  expected:[3,4]

console.log(searchRange2([5, 7, 7, 8, 8, 10], 6));
// expected: [-1,-1]

console.log(searchRange2([], 0));
// expected: [-1,-1]

console.log(searchRange2([5, 7, 7, 8, 8, 10], 6));
// expected: [-1,-1]

console.log(searchRange2([5, 7, 7, 8, 8, 10], 8));
// expected: [3,4]

console.log(searchRange2([1], 1));
// expected: [0, 0];

console.log(searchRange2([1, 3], 1));
// expected: [0,0]

console.log(searchRange2([1, 4], 4));
// expected: [1,1]

console.log(searchRange2([2, 2], 2));
// expected: [0,1]

// -----------------------------

// console.log(findFirstGreaterOrEqual([1, 4, 4, 4], 5));
