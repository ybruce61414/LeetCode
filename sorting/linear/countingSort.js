// integer-based sorting algorithm
/*
* Pros & Cons:
* 1. bad if the integers are very large because the array of that size should be made.
* 2. can't use negative numbers
*
*/

const countingSort = arr => {
  let max = 0;
  let temp;
  const res = new Array(arr.length).fill(null);

  // extract max value
  for (let item of arr) max = Math.max(item, max)

  temp = (new Array(max + 1)).fill(0);

  // count arr
  for (let item of arr) temp[item] += 1;

  // cumulative arr
  for (let i = 0; i < temp.length; i++) {
    if (i > 0) temp[i] = temp[i - 1] + temp[i]
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    // for loop backward to keep stable
    let pos = temp[arr[i]] - 1;
    temp[arr[i]] -= 1;
    res[pos] = arr[i];
  }


  return res;
};

console.log('---countingSort1', countingSort([1, 3, 2, 8, 5, 1, 5, 1, 2, 7]))
// [1, 1, 1, 2, 2, 3, 5, 5, 7, 8]

console.log('---countingSort2', countingSort([4, 2, 2, 8, 3, 3, 1]))


