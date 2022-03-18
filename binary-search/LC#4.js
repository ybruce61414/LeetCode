// 4. Median of Two Sorted Arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays0 = function (nums1, nums2) {
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

var findMedianSortedArrays = function (nums1, nums2) {
  let A = nums1.length >= nums2.length ? nums2 : nums1;
  let B = nums1.length >= nums2.length ? nums1 : nums2;
  let total = A.length + B.length;
  let half = Math.floor(total / 2);

  let left = 0;
  let right = A.length - 1;

  while (true) {
    let i = Math.floor((left + right) / 2);
    let j = half - i - 2;
    console.log(i, j);

    let Aleft = i >= 0 ? A[i] : -Infinity;
    let Aright = i + 1 < A.length ? A[i + 1] : Infinity;
    let Bleft = j >= 0 ? B[j] : -Infinity;
    let Bright = j + 1 < B.length ? B[j + 1] : Infinity;

    console.log("even-l--", Aleft, Aright);
    console.log("even-r--", Bleft, Bright);

    //  partition is correct
    if (Aleft <= Bright && Bleft <= Aright) {
      if (total % 2 === 0) {
        // even
        return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
      }
      // odd
      return Math.min(Aright, Bright);
    } else if (Aleft > Bright) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }
};

// console.log(
//   findMedianSortedArrays([2, 4, 6, 7, 10], [1, 3, 5, 8, 9, 11, 12, 13, 14])
// );

console.log(findMedianSortedArrays([], [3, 4, 5]));
// console.log(findMedianSortedArrays([1, 2], [3, 4]));
// console.log(findMedianSortedArrays([1, 2, 3], []));
// console.log(findMedianSortedArrays([-1, -2], [3]));
