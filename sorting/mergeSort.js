const merge2Sorted = (arr1, arr2) => {
  let res = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] > arr2[0]) {
      res.push(arr2.shift());
    } else {
      res.push(arr1.shift());
    }
  }

  return [...res, ...arr1, ...arr2];
};

const mergeSort = (arr) => {
  if (arr.length === 1) return arr;

  const half = Math.floor(arr.length / 2);
  let left = arr.splice(0, half);

  return merge2Sorted(mergeSort(left), mergeSort(arr));
};

const arr1 = [3, 5, 8];
const arr2 = [89, 98, 100];
// console.log(merge2Sorted(arr1, arr2));

console.log(mergeSort([4, 8, 3, 9, 5, 89, 32]));
