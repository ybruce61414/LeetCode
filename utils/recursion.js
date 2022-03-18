// recursion playground

const getSum = (arr) => {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];

  return arr[0] + getSum(arr.slice(1));
};

console.log(getSum([2, 5, 7, 8]));

// count the number of items in a list
const count = (arr) => {
  if (arr.length === 0) return 0;
  return 1 + count(arr.slice(1));
};

console.log(count([1, 1, 1, 1]));
