// 523. Continuous Subarray Sum
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum0 = function (nums, k) {
  //brute force approach
  for (let i = 0; i < nums.length - 1; i++) {
    let total = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      total += nums[j];
      if (total % k === 0) return true;
    }
  }
  return false;
};

var checkSubarraySum = function (nums, k) {
  if (nums.length === 1) return false;
  let total = 0;
  let map = new Map();

  map.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    let rem = total % k;

    if (map.has(rem)) {
      let index = map.get(rem);
      if (i - index >= 2) return true;
    } else {
      map.set(rem, i);
    }
  }

  return false;
};

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));
// true

console.log(checkSubarraySum([23, 2, 6, 4, 7], 6));
// true

console.log(checkSubarraySum([23, 2, 6, 4, 7], 13));
// false

console.log(checkSubarraySum([23, 2, 4, 6, 6], 7));
// true

console.log(checkSubarraySum([5, 0, 0, 0], 3));
// true

console.log(checkSubarraySum([1, 0], 2));
// false

console.log(checkSubarraySum([23, 0, 0], 6));
// true
