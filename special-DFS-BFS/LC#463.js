// 463. Island Perimeter
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const dfs = (row, col) => {
    // base case
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {
      return 1;
    }

    if (grid[row][col] === 2) {
      return 0;
    }

    if (grid[row][col] === 0) {
      return 1;
    }

    grid[row][col] = 2;
    let top = dfs(row - 1, col);
    let left = dfs(row, col - 1);
    let right = dfs(row, col + 1);
    let bottom = dfs(row + 1, col);

    return top + left + right + bottom;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        // i,j dfs entry point
        return dfs(i, j);
      }
    }
  }

  return 0;
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
// 16
