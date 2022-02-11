// 1248. Count Number of Nice Subarrays
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let right = 0;
  let count = 0;
  let odd = [];

  while (right < nums.length) {
    if (nums[right] % 2 === 1) {
      odd.push(right);
    }

    if (odd.length === k) {
      let r = odd[k - 1];
      let l = odd.shift();
      count += (l + 1) * (nums.length - 1 - r + 1);
    }

    right += 1;
  }

  return count;
};

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));
// 2
//
// console.log(numberOfSubarrays([2, 4, 6], 1));
// // 0
//
// console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
// // 16
