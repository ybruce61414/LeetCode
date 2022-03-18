// 852. Peak Index in a Mountain Array
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray0 = function (arr) {
  // t.c: O(n)
  let temp = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > temp) {
      temp = arr[i];
      continue;
    }
    return i - 1;
  }
};

var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;

  while (right > left) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

console.log(peakIndexInMountainArray([0, 2, 1, 0]));
