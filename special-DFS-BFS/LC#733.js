// 733. Flood Fill
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFillDFS = function (image, sr, sc, newColor) {
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

var floodFill = function (image, sr, sc, newColor) {
  // BFS (always with queue)
  let originColor = image[sr][sc];
  let queue = [];
  let directions = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  if (originColor === newColor) return image;
  queue.push([sr, sc]);

  while (queue.length > 0) {
    let [dr, dc] = queue.shift();
    image[dr][dc] = newColor;

    for (let direction of directions) {
      let newRow = dr + direction[0];
      let newCol = dc + direction[1];

      if (
        newCol < 0 ||
        newRow < 0 ||
        newRow >= image.length ||
        newCol >= image[0].length ||
        image[newRow][newCol] !== originColor
      ) {
        continue;
      }

      queue.push([newRow, newCol]);
    }
  }

  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);

// [[2,2,2],[2,2,0],[2,0,1]]

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
