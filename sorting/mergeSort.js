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


const merge202304 = (arr1, arr2) => {
  let res = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] > arr2[p2]) {
      res.push(arr2[p2]);
      p2 += 1;
    } else {
      res.push(arr1[p1]);
      p1 += 1;
    }
  }

  if (p1 === arr1.length) {
    res = res.concat(arr2.slice(p2));
  } else {
    res = res.concat(arr1.slice(p1));
  }
  return res;
}


console.log('--util: merge0', merge202304([3,10,99], [4,9,120]))
console.log('--util: merge1', merge202304([3], [4,9,120]))




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
