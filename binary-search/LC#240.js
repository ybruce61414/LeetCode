// 240. Search a 2D Matrix II
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix0 = function (matrix, target) {
  // brute force
  for (let i = 0; i < matrix.length; i++) {
    for (let j = matrix[0].length - 1; j >= 0; j--) {
      if (matrix[i][j] === target) return true;
      if (matrix[i][j] < target) break;
    }
  }
  return false;
};

var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] > target) break;

    let left = 0;
    let right = matrix[i].length - 1;

    while (right >= left) {
      let mid = Math.floor((left + right) / 2);
      if (matrix[i][mid] === target) return true;
      if (matrix[i][mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
);
console.log(searchMatrix([[-5]], -5));
