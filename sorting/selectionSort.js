const selectionSort0 = (arr) => {
  //O(n^2)
  const swap = (idx1, idx2) => {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  };

  const findMinIndex = (left, right) => {
    let min = left;
    for (let i = left + 1; i <= right; i++) {
      if (arr[i] < arr[min]) min = i;
    }
    return min;
  };

  for (let j = 0; j < arr.length; j++) {
    let idx = findMinIndex(j, arr.length - 1);
    swap(j, idx);
  }
  return arr;
};

const selectionSort1 = (arr) => {
  const swap = (idx1, idx2) => {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  };

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) lowest = j;
    }
    if (lowest !== i) swap(i, lowest);
  }

  return arr;
};

const arr1 = [2, 5, 8, 3, 9, 4, 1];
const arr2 = [3, -9, -12, -1, 8];
const arr3 = [20, 20, 31, 56, 1, 12, 12];
console.log(selectionSort1(arr1));
