// merge two sorted arrays
//method 1
const merge2SortedArrs1 = (num1, num2) => {
  let i = 0;
  let j = 0;
  let res = [];

  while (i < num1.length && j < num2.length) {
    if (num1[i] < num2[j]) {
      res.push(num1[i]);
      i += 1;
    } else {
      res.push(num2[j]);
      j += 1;
    }
  }

  if (i !== num1.length) {
    res = [...res, ...num1.slice(i)];
  }

  if (j !== num2.length) {
    res = [...res, ...num2.slice(j)];
  }

  return res;
};

//method2
const merge2SortedArrs2 = (num1, num2) => {
  // modified input arguments
  let res = [];

  while (num1.length > 0 && num2.length > 0) {
    if (num1[0] < num2[0]) {
      res.push(num1.shift());
    } else {
      res.push(num2.shift());
    }
  }

  return [...res, ...num1, ...num2];
};

console.log(merge2SortedArrs2([1, 2, 5, 10], [3, 4, 6, 18, 20, 40]));
