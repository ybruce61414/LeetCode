// 695. Max Area of Island
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let max = 0;
  let tempArea = 0;

  const dfs = (row, col) => {
    if (
      row < 0 ||
      col < 0 ||
      row >= grid.length ||
      col >= grid[0].length ||
      grid[row][col] === "*"
    ) {
      return;
    }

    if (grid[row][col] === 0) return;

    grid[row][col] = "*";
    tempArea += 1;

    dfs(row - 1, col);
    dfs(row, col - 1);
    dfs(row + 1, col);
    dfs(row, col + 1);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] !== 0) {
        max = Math.max(max, tempArea);
        tempArea = 0;
        dfs(i, j);
      }
    }
  }

  return Math.max(max, tempArea);
};

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);
// 6
