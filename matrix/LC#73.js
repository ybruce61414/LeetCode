// 73. Set Matrix Zeroes

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let firstRowZero = false;
  let firstColZero = false;

  //  record zero to first col and row
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        if (i === 0) firstRowZero = true;
        if (j === 0) firstColZero = true;
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  // setting col zero
  for (let i = 1; i < m; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 1; j < n; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  // setting row zero
  for (let i = 1; i < n; i++) {
    if (matrix[0][i] === 0) {
      for (let j = 1; j < m; j++) {
        matrix[j][i] = 0;
      }
    }
  }

  if (firstColZero) {
    for (let i = 1; i < m; i++) {
      matrix[i][0] = 0;
    }
  }

  if (firstRowZero) {
    for (let j = 1; j < n; j++) {
      matrix[0][j] = 0;
    }
  }

  return matrix;
};

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
// expected: [[1,0,1],[0,0,0],[1,0,1]]

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
// expected: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

console.log(setZeroes([[1, 0]]));
// expected: [[0,0]]
