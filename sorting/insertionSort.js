const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > cur) {
      arr[j + 1] = arr[j];
      j -= 1;
    }

    if (j !== i - 1) arr[j + 1] = cur;
  }
  return arr;
};

// [1,2,9,76,20]  20

const arr1 = [2, 5, 8, 3, 9, 4, 1];
const arr2 = [3, -9, -12, -1, 8];
const arr3 = [20, 20, 31, 56, 1, 12, 12];
console.log(insertionSort(arr3));
