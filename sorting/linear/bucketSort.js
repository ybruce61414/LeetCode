

const bucketSort = arr => {
  let buckets = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) buckets[i] = [];

  for (let i = 0; i < arr.length; i++) {
    // todo
    // let idx = arr[i] * arr.length;
    // let flr = Math.floor(idx);
    // buckets[flr].push(arr[i]);
  }

  return buckets
};

console.log('---bucketSort1', bucketSort([0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434]))
// console.log('---bucketSort2', bucketSort([1, 3, 2, 8, 5, 1, 5, 1, 2, 7]))