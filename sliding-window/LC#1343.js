// 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  let right = 0;
  let totalSum = threshold * k;
  let windowSum = 0;
  let res = 0;

  while (right < arr.length) {
    windowSum += arr[right];

    if (right >= k) {
      windowSum -= arr[right - k];
    }

    if (right >= k - 1 && windowSum >= totalSum) res += 1;

    right += 1;
  }
  return res;
};

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4));
// 3

console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5));
// 6
