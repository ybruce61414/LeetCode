// 1248. Count Number of Nice Subarrays
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  const map = new Map();
  let oddCount = 0;
  let res = 0;

  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    oddCount += nums[i] % 2;

    if (map.has(oddCount - k)) {
      res += map.get(oddCount - k);
    }
    map.set(oddCount, (map.get(oddCount) || 0) + 1);
  }

  return res;
};

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));
// 2
//
console.log(numberOfSubarrays([2, 4, 6], 1));
// 0

console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
// 16

console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
// 16
