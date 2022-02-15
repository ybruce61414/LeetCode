// 974. Subarray Sums Divisible by K
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let map = new Map();
  let total = 0;
  let res = 0;

  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    let rem = total % k;
    if (rem < 0) rem += k;

    if (map.has(rem)) {
      res += map.get(rem);
    }
    map.set(rem, (map.get(rem) || 0) + 1);
  }
  return res;
};

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5));
// 7

console.log(subarraysDivByK([-1, 2, 9], 2));
// 2
