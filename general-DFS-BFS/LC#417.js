// 417. Pacific Atlantic Water Flow
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic0 = function (heights) {
  //  brute force
  let res = [];

  const dfs = (y, x, h) => {
    if (
      x < 0 ||
      y < 0 ||
      x >= heights[0].length ||
      y >= heights.length ||
      heights[y][x] === "*"
    ) {
      return true;
    }

    let curr = heights[y][x];
    if (h < curr) return false;

    heights[y][x] = "*";
    let top = dfs(y - 1, x, curr);
    let left = dfs(y, x - 1, curr);
    let right = dfs(y, x + 1, curr);
    let bottom = dfs(y + 1, x, curr);

    heights[y][x] = curr;

    return (top || left) && (right || bottom);
  };

  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[0].length; j++) {
      if (dfs(i, j, heights[i][j])) {
        res.push([i, j]);
      }
    }
  }

  return res;
};

var pacificAtlantic = function (heights) {
  let m = heights.length;
  let n = heights[0].length;
  let res = [];
  let canReach = Array.from({ length: m }, () => new Array(n).fill(false));

  const dfs = (row, col, h, label) => {
    if (
      row < 0 ||
      col < 0 ||
      row >= heights.length ||
      col >= heights[0].length ||
      canReach[row][col] === label ||
      canReach[row][col] === "*"
    )
      return;

    let curr = heights[row][col];
    if (curr < h) return;

    if (canReach[row][col] === false) {
      canReach[row][col] = label;
    } else {
      canReach[row][col] = "*";
      res.push([row, col]);
    }

    dfs(row - 1, col, curr, label);
    dfs(row, col - 1, curr, label);
    dfs(row + 1, col, curr, label);
    dfs(row, col + 1, curr, label);
  };

  for (let i = 0; i < m; i++) {
    dfs(i, 0, heights[i][0], 1);
    dfs(i, n - 1, heights[i][n - 1], 2);
  }

  for (let j = 0; j < n; j++) {
    dfs(0, j, heights[0][j], 1);
    dfs(m - 1, j, heights[m - 1][j], 2);
  }

  // console.log(canReach);
  return canReach;
};

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);

// [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
