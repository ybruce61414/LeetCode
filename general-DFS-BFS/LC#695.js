// 695. Max Area of Island
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIslandDFS = function (grid) {
  //dfs
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

var maxAreaOfIsland = function (grid) {
  //bfs
  let rowLen = grid.length;
  let colLen = grid[0].length;
  let res = 0;
  let directions = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (grid[i][j] === 0) continue;

      let queue = [];
      let area = 0;
      queue.push([i, j]);

      while (queue.length > 0) {
        let [nr, nc] = queue.shift();
        if (
          nr < 0 ||
          nc < 0 ||
          nr >= rowLen ||
          nc >= colLen ||
          grid[nr][nc] === 0
        ) {
          continue;
        }

        area += 1;
        grid[nr][nc] = 0;

        for (let direction of directions) {
          queue.push([nr + direction[0], nc + direction[1]]);
        }
      }
      res = Math.max(res, area);
    }
  }

  return res;
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
