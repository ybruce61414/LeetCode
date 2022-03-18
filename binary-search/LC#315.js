// 315. Count of Smaller Numbers After Self
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller0 = function (nums) {
  //brute force
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) count += 1;
    }
    res.push(count);
  }
  return res;
};

var countSmaller = function (nums) {
  let counts = Array.from({ length: nums.length }, () => 0);
  let sorted = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    const index = findFirstLargerOrEqual(sorted, nums[i]);
    sorted.splice(index, 0, nums[i]);
    counts[i] = index;
  }

  return counts;
};

const findFirstLargerOrEqual = (arr, tar) => {
  let left = 0;
  let right = arr.length;

  while (right > left) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < tar) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

console.log(countSmaller([5, 2, 6, 1]));
// output: [2,1,1,0]

// console.log(findFirstLargerOrEqual([1], 6));
