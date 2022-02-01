// 4. Median of Two Sorted Arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let merge = merge2SortedArrs(nums1, nums2);

  if (merge.length % 2 === 0) {
    let idx = merge.length / 2;
    return (merge[idx] + merge[idx - 1]) / 2;
  } else {
    let idx = Math.ceil(merge.length / 2);
    return merge[idx - 1];
  }
};

const merge2SortedArrs = (num1, num2) => {
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

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
