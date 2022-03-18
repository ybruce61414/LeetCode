const partitionFirst = (arr, start, end) => {
  // in-place
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
console.log(partitionFirst([[3, 2, 1, 5, 6, 4]], 3, 5));

// console.log(quickSort(arr2));
