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

// console.log(firstGreater([2, 5, 7, 8, 19, 19, 19, 50], 1));

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  return arr;
};

const partition = (arr, low, hight) => {
  let swapIdx = low - 1;
  let pivot = arr[hight].freq;

  for (let i = low; i <= hight - 1; i++) {
    if (pivot > arr[i].freq) {
      swapIdx += 1;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, hight, swapIdx + 1);

  return swapIdx + 1;
};

var topKFrequent = function (nums, k) {
  const freqCounter = {};
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    let char = nums[i];
    freqCounter[char] = (freqCounter[char] || 0) + 1;
  }

  for (const key of Object.keys(freqCounter)) {
    res.push({ key, freq: freqCounter[key] });
  }

  console.log("--res", res);

  let pos = res.length - k;
  let left = 0;
  let right = res.length - 1;

  while (right > left) {
    let idx = partition(res, left, right);

    if (idx === pos) {
      return;
    } else if (idx > pos) {
      right = idx - 1;
    } else {
      left = idx + 1;
    }
  }

  return res;
};

console.log(topKFrequent([5, 3, 1, 1, 1, 73, 73, 1], 2));
// console.log(swap([10, 80, 30, 90, 40, 50, 70], 0, 1));

// console.log(partition([10, 80, 30, 90, 40, 50, 70], 0, 6));
