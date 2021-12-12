const binarySearch = (nums, target) => {
  let midPosition = Math.floor(nums.length / 2);

  if (nums[midPosition] === target) return target;

  if (nums.length === 1) return undefined;

  if (target > nums[midPosition]) {
    return binarySearch(nums.slice(midPosition + 1, nums.length), target);
  } else {
    return binarySearch(nums.slice(0, midPosition), target);
  }
};

console.log(binarySearch([2, 5, 7, 8, 19, 50], 20));
