const findFirstLargerOrEqual = (nums, target) => {
  let left = 0;
  let right = nums.length;

  while (right > left) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

console.log(findFirstLargerOrEqual([1, 3, 5, 6], 5));
