const partitionFirst = (arr, start, end) => {
  // in-place (single pointer)
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIdx += 1;
      let temp = arr[i];
      arr[i] = arr[swapIdx];
      arr[swapIdx] = temp;
    }
  }

  let temp = pivot;
  arr[start] = arr[swapIdx];
  arr[swapIdx] = temp;

  return swapIdx;
};



const partition202304 = (arr, start, end) => {
  // two pointer
  let left = start + 1;
  let right = end;
  let pivot = arr[start];
  let swapIdx = start;

  const swap = (idx1, idx2) => {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }

  while (left < right) {
    if (arr[left] < pivot) {
      left += 1;
    } else {
      if (arr[right] < pivot) {
        swap(left, right);
        left += 1;
        right -= 1;
      } else {
        right -= 1;
      }
    }
  }

  swap(left, swapIdx);
  return left;
}





const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    let pivotIdx = partitionFirst(arr, start, end);
    quickSort(arr, start, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, end);
  }

  return arr;
};

const arr1 = [4, 6, 9, 1, 2, 5];
const arr2 = [3, 2, 1, 5, 6, 4];

// console.log(partitionFirst([[3,2,1,5,6,4]], 0, 7));
// console.log('partitionFirst--', partitionFirst([[3, 2, 1, 5, 6, 4]], 3, 5));

// console.log(quickSort(arr2));

// console.log('----partition202304',partition202304([50, 25,92, 16, 76, 30, 43, 54, 19], 0, 8))


const quickSelect = (arr, left, right) => {
  let pivot = arr[left]
  let s = left

  for (let i = left + 1; i <= right; i++) {
    if (pivot > arr[i]) {
      s += 1
      swap(arr, s, i)
    }
  }
  if (s !== left) swap(arr, s, left)
  return arr
}

const swap = (arr, idx1, idx2) => {
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
  return arr
}
console.log('----quickSelect',quickSelect([50, 100, 90, 80, 70, 25, 15], 0, 6))