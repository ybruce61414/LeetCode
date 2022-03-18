// 81. Search in Rotated Sorted Array II
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return true;

    if (nums[mid] === nums[left] && nums[mid] === nums[right]) {
      // arr[right] == arr[mid] == arr[left]
      left += 1;
      right -= 1;
    } else if (nums[mid] >= nums[left]) {
      // left sorted
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] < nums[left]) {
      // right sorted
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return false;
};
