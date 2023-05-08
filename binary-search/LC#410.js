/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


var splitArray = function(nums, k) {
  let left = Math.max(...nums)
  let right = nums.reduce((prev, cur) => prev + cur, 0)

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (checkSum(mid, nums) > k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

const checkSum = (sum, arr) => {
  let count = 0;
  let temp = 0;

  for (let i = 0; i < arr.length; i++) {
    temp += arr[i];

    if (temp > sum) {
      temp = arr[i];
      count += 1;
    }
  }

  return count + 1;
}

// 2305. Fair Distribution of Cookies



const nums = [7,2,5,10,8];
const k = 2

console.log('---checkSum', checkSum(21, nums))
console.log('---splitArray1', splitArray(nums, k))