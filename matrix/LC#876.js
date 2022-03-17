// 867. Transpose Matrix
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  let res = Array.from(
    { length: matrix[0].length },
    () => new Array(matrix.length)
  );

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      res[j][i] = matrix[i][j];
    }
  }

  return res;
};
