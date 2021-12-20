const binarySearch1 = (nums, target) => {
  //  recursion
  let midPosition = Math.floor(nums.length / 2);

  if (nums[midPosition] === target) return target;

  if (nums.length === 1) return undefined;

  if (target > nums[midPosition]) {
    return binarySearch(nums.slice(midPosition + 1, nums.length), target);
  } else {
    return binarySearch(nums.slice(0, midPosition), target);
  }
};

const binarySearch2 = (nums, target) => {
  //  iteration
  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      return target;
    }
  }
  return -1;
};

const firstGreater = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (right > left) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
};

console.log(firstGreater([2, 5, 7, 8, 19, 19, 19, 50], 2));
