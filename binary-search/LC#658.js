// 658. Find K Closest Elements
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements0 = function (arr, k, x) {
  // linear time complexity
  let count = arr.length - k;
  let left = 0;
  let right = arr.length - 1;

  for (let i = 0; i < count; i++) {
    let ld = x - arr[left];
    let rd = arr[right] - x;

    if (rd >= ld) {
      right -= 1;
    } else {
      left += 1;
    }
  }

  return arr.slice(left, right + 1);
};

var findClosestElements = function (arr, k, x) {
  let left = 0;
  let right = arr.length - k;

  while (right > left) {
    let mid = Math.floor((left + right) / 2);
    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return arr.slice(left, left + k);
};

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
console.log(findClosestElements([1, 2, 3, 4, 5, 6, 7], 3, 5));

console.log(findClosestElements([1, 1, 2, 2, 2, 2, 2, 3, 3], 3, 3));
// [2,3,3]
