# Binary Search Note
####    Basics
1.  [LeetCode 704. Binary Search](https://leetcode.com/problems/binary-search/) ``easy``
1.  [LeetCode 69. Sqrt(x)](https://leetcode.com/problems/sqrtx/) ``easy``


<details>
    <summary>704.  </summary>

```js
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (right >= left) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if(nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return -1;
};
```
</details>

<details>
    <summary>69.  </summary>

```js
var mySqrt = function(x) {
  if (x === 0) return 0;

  let left = 1;
  let right = x;

  while (left < right) {
    const mid = Math.floor((left + right)/ 2);

    if (mid** 2 === x) return mid;

    if (mid** 2 < x && (mid + 1)**2 > x) return mid;

    if (mid**2 > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
```
</details>

####    Trick1: Find first greater or equal 
1.  [LeetCode 35. Search Insert Position](https://leetcode.com/problems/search-insert-position/) ``easy``
2.  [LeetCode 34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) ``medium``

<details>
    <summary>35.  </summary>

```js
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;

};
```
</details>

<details>
    <summary>34.  </summary>

```js
var searchRange = function(nums, target) {
  let right = findFirstGreaterOrEqual(nums, target + 1);
  let left = findFirstGreaterOrEqual(nums, target);

  if (left === right) return [-1, -1];

  return [left, right - 1];
};

const findFirstGreaterOrEqual = (arr, tar) => {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < tar) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};
```
</details>

####    Trick2: Find Pivot of Rotated Sorted Array
1.  [LeetCode 153. Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) ``medium``
1.  [LeetCode 33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) ``medium``
<details>
    <summary>153.  </summary>

```js
var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return nums[left];
};
```
</details>

<details>
    <summary>33.  </summary>

```js
var search = function(nums, target) {
  const pivot = findPivot(nums);
  const size = nums.length;


  if (nums[pivot] <= target && target <= nums[size - 1]) {
    return bs(nums, pivot, size - 1, target);
  }
  return bs(nums, 0, pivot - 1, target);
};

const bs = (arr, l, r, tar) => {
  let left = l;
  let right = r;

  while (left <= right) {
    const mid = Math.floor((left + right)/ 2);
    if (arr[mid] === tar) return mid;

    if (arr[mid] < tar) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

const findPivot = arr => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] > arr[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};
```
</details>
