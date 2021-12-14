//  238. Product of Array Except Self
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//  thought: left product array & right product array
var productExceptSelf = function (nums) {
  let res = new Array(nums.length).fill(1);

  //left
  for (let i = 1; i < nums.length; i++) {
    res[i] = nums[i - 1] * res[i - 1];
  }

  //right
  let prevPro = 1;
  for (let j = nums.length - 2; j >= 0; j--) {
    prevPro = prevPro * nums[j + 1];
    res[j] = res[j] * prevPro;
  }

  return res;
};

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
console.log(productExceptSelf([1, 2, 3, 4]));
