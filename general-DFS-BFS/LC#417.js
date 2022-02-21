// 417. Pacific Atlantic Water Flow
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
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
