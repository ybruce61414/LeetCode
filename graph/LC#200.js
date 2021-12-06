//  Number of Islands
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslandsDFS = function (grid) {
  let count = 0;

  const dfsHelper = (inputGrid, row, col) => {
    if (
      row < 0 ||
      col < 0 ||
      row >= inputGrid.length ||
      col >= inputGrid[row].length ||
      inputGrid[row][col] !== "1"
    ) {
      return;
    }
    inputGrid[row][col] = "*";
    dfsHelper(inputGrid, row, col + 1);
    dfsHelper(inputGrid, row, col - 1);
    dfsHelper(inputGrid, row - 1, col);
    dfsHelper(inputGrid, row + 1, col);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count += 1;
        dfsHelper(grid, i, j);
      }
    }
  }
  return count;
};

var numIslandsBFS = function (grid) {};

const grid1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

const grid2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(numIslandsDFS(grid2));
