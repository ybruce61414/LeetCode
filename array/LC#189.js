// 189. Rotate Array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let step = k % nums.length;

  for (let i = 0; i < step; i++) {
    let pop = nums.pop();
    nums.unshift(pop);
  }

  return nums;
};

var rotate1 = function (nums, k) {
  let step = k % nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, step - 1);
  reverse(nums, step, nums.length - 1);

  return nums;
};

function reverse(arr, start, end) {
  let left = start;
  let right = end;

  while (right > left) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left += 1;
    right -= 1;
  }
  return arr;
}

console.log(rotate1([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(reverse([1, 2, 3, 4, 5, 6, 7]));
