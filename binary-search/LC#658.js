// 658. Find K Closest Elements
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let left = 0;
  let right = arr.length - 1;

  // first greater or equal
  while (right > left) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === x) {
      left = mid;
      break;
    } else if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  for (let i = 0; i < k; i++) {}

  return left;
};

// console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
// console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1));
// console.log(findClosestElements([1, 2, 4, 5, 10, 34], 4, 6));
