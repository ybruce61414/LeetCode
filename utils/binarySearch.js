const binarySearch = (nums, target) => {
  let midPosition = Math.floor(nums.length / 2);

  if (target === nums[midPosition]) {
    return target;
  } else if (nums.length === 0) {
    return undefined;
  } else if (target > nums[midPosition]) {
    return binarySearch(nums.slice(midPosition + 1, nums.length + 1), target);
  } else {
    return binarySearch(nums.slice(0, midPosition), target);
  }
};

console.log(binarySearch([2, 5, 7, 8, 19, 50], 19));
