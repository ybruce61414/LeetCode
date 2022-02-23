/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let map = new Map();
  let monoStack = [];
  let next = [];

  for (let i = nums2.length - 1; i >= 0; i--) {
    while (
      monoStack.length > 0 &&
      monoStack[monoStack.length - 1] <= nums2[i]
    ) {
      monoStack.pop();
    }
    map.set(
      nums2[i],
      monoStack.length > 0 ? monoStack[monoStack.length - 1] : -1
    );
    monoStack.push(nums2[i]);
  }

  for (let element of nums1) {
    next.push(map.get(element));
  }

  return next;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
// [-1,3,-1]

console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
// [3, -1]
