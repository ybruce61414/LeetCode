// 48. Rotate Image

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  //  transpose
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      //  swap
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    reverse(matrix[i]);
  }
  return matrix;
};

const reverse = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (end > start) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start += 1;
    end -= 1;
  }
  return arr;
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  "%c Get Riggity Riggity Wrecked Son",
  "color: white; background: pink; font-size: 20px"
);
// expected: [[7,4,1],[8,5,2],[9,6,3]]
