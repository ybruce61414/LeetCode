const bubbleSort = (arr) => {
  //O(n^2)
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const bubbleOptSort = (arr) => {
  // optimization for nearly sorted arr
  // best case O (n)
  for (let i = arr.length - 1; i >= 0; i--) {
    let isSwap = false;
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap
        isSwap = true;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }

    if (!isSwap) break;
  }
  return arr;
};

console.log(bubbleOptSort([2, 5, 8, 3, 9, 4, 1]));
console.log(bubbleOptSort([5, 3, 8, 2, 1, 4]));
console.log(bubbleOptSort([20, 20, 31, 56, 1, 12, 12]));
console.log(bubbleOptSort([3, -9, -12, -1, 8]));
