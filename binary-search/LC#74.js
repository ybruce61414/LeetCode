// 74. Search a 2D Matrix
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix0 = function (matrix, target) {
  let targetRow;

  for (let i = 0; i < matrix.length; i++) {
    if (i === matrix.length - 1) {
      targetRow = matrix.length - 1;
    } else if (target >= matrix[i][0] && target < matrix[i + 1][0]) {
      targetRow = i;
      break;
    }
  }

  let left = 0;
  let right = matrix[0].length - 1;

  while (right >= left) {
    let mid = Math.floor((left + right) / 2);
    if (target < matrix[targetRow][mid]) {
      right = mid - 1;
    } else if (target > matrix[targetRow][mid]) {
      left = mid + 1;
    } else {
      left = mid;
      break;
    }
  }

  return matrix[targetRow][left] === target;
};

var searchMatrix1 = function (matrix, target) {
  let left = 0;
  let right = matrix.length - 1;

  while (right > left) {
    let mid = Math.round((left + right) / 2);
    if (matrix[mid][0] === target) return true;
    if (matrix[mid][0] < target) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  const binarySearch = (arr, tar) => {
    let left = 0;
    let right = arr.length - 1;

    while (right >= left) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] > tar) {
        right = mid - 1;
      } else if (arr[mid] < tar) {
        left = mid + 1;
      } else {
        left = mid;
        break;
      }
    }
    return arr[left] === tar;
  };

  return binarySearch(matrix[left], target);
};

// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     3
//   )
// );

const findFirstSmallerOrEqual = (arr, tar) => {
  let left = 0;
  let right = arr.length - 1;

  while (right > left) {
    let mid = Math.round((left + right) / 2);
    if (arr[mid] === tar) return mid;
    if (arr[mid] > tar) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  return left;
};

console.log(findFirstSmallerOrEqual([1, 10, 23], 3));

var searchMatrix3 = function (matrix, target) {
  let left = 0;
  let right = matrix.length - 1;

  //firstGreaterOrEqual
  while (right > left) {
    let mid = Math.floor((left + right) / 2);
    if (matrix[mid][matrix[0].length - 1] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return binarySearch(matrix[left], target);
};

const binarySearch = (arr, tar) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === tar) return true;
    if (arr[mid] < tar) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};
