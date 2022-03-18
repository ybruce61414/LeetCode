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

var numIslandsBFS = function (grid) {
  let res = 0;
  let directions = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "0") continue;

      let queue = [];
      queue.push([i, j]);
      res += 1;

      while (queue.length > 0) {
        let [dr, dc] = queue.shift();
        if (
          dr < 0 ||
          dc < 0 ||
          dr >= grid.length ||
          dc >= grid[0].length ||
          grid[dr][dc] === "0"
        ) {
          continue;
        }

        grid[dr][dc] = "0";
        for (let direction of directions) {
          queue.push([dr + direction[0], dc + direction[1]]);
        }
      }
    }
  }

  return res;
};

var numIslands = function (grid) {
  let res = 0;

  const dfs = (row, col) => {
    if (
      row < 0 ||
      col < 0 ||
      row >= grid.length ||
      col >= grid[0].length ||
      grid[row][col] === "0"
    ) {
      return;
    }

    // 封迴路
    grid[row][col] = "0";
    dfs(row - 1, col);
    dfs(row, col - 1);
    dfs(row + 1, col);
    dfs(row, col + 1);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        res += 1;
        dfs(i, j);
      }
    }
  }

  return res;
};

const grid1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
// 1

const grid2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
// 3

console.log(numIslandsBFS(grid1));
