// 454. 4Sum II
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let map = new Map();
  let count = 0;

  // build map for num1 and num2
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      let total = nums1[i] + nums2[j];
      map.set(total, (map.get(total) || 0) + 1);
    }
  }

  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      let total = nums3[i] + nums4[j];

      if (map.has(total * -1)) {
        count += map.get(total * -1);
      }
    }
  }

  return count;
};

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));
// 2
