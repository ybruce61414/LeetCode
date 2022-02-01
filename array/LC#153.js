// 153. Find Minimum in Rotated Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let index = findPivot(nums);

  if (nums[index] < nums[0]) {
    return nums[index];
  } else {
    return nums[0];
  }
};

const findPivot = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (right > left) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] >= arr[0]) {
      left += 1;
    } else {
      right = mid;
    }
  }

  return right;
};

// console.log(findRotatedPivot([2, 1]));
// console.log(findRotatedPivot([1, 2, 3, 4, 5]));

// console.log(findMin([11, 13, 15, 17]));
console.log(findMin([1, 2, 3, 4, 5]));
