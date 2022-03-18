// 88. Merge Sorted Array
var merge = function (nums1, m, nums2, n) {
  let end1 = m - 1;
  let end2 = n - 1;
  let end = m + n - 1;

  while (end1 >= 0 && end2 >= 0) {
    if (nums1[end1] < nums2[end2]) {
      nums1[end] = nums2[end2];
      end2 -= 1;
    } else {
      nums1[end] = nums1[end1];
      end1 -= 1;
    }
    end -= 1;
  }

  while (end2 >= 0) {
    nums1[end] = nums2[end2];
    end -= 1;
    end2 -= 1;
  }

  return nums1;
};
