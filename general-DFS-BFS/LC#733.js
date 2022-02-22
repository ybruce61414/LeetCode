// 733. Flood Fill
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const dfs = (row, col, originColor) => {
    if (row < 0 || col < 0 || row >= image.length || col >= image[0].length) {
      return;
    }

    if (image[row][col] !== originColor) return;
    image[row][col] = newColor;

    dfs(row - 1, col, originColor);
    dfs(row, col - 1, originColor);
    dfs(row + 1, col, originColor);
    dfs(row, col + 1, originColor);
  };

  if (image[sr][sc] !== newColor) dfs(sr, sc, image[sr][sc]);

  return image;
};

// console.log(
//   floodFill(
//     [
//       [1, 1, 1],
//       [1, 1, 0],
//       [1, 0, 1],
//     ],
//     1,
//     1,
//     2
//   )
// );
//
// // [[2,2,2],[2,2,0],[2,0,1]]

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 1, 1],
    ],
    1,
    1,
    1
  )
);
