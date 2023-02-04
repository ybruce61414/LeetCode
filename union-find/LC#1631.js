// 1631. Path With Minimum Effort

/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
  const parent = {};
  const diffs = [];
  let minDiff = 0;

  const find = node => {
    if (parent[node] !== node) parent[node] = find(parent[node]);
    return parent[node];
  };

  const union = (n1, n2) => {
    const r1 = find(n1);
    const r2 = find(n2);

    if (r1 !== r2) parent[r1] = r2;
  };

  const rowSize = heights.length;
  const colSize = heights[0].length;

  for (let i = 0; i < rowSize * colSize; i++) parent[i] = i;

  for (let i = 0; i < rowSize; i++) {
    for (let j = 0; j < colSize; j++) {
      if ((j + 1) < colSize) {
        diffs.push([Math.abs(heights[i][j] - heights[i][j + 1]), i * colSize + j, i * colSize + j + 1]);
      }
      if ((i + 1) < rowSize) {
        diffs.push([Math.abs(heights[i][j] - heights[i + 1][j]), i * colSize + j, (i + 1) * colSize + j]);
      }
    }
  }

  diffs.sort((a, b) => a[0] - b[0]);

  let idx = 0;
  while (find(0) !== find(rowSize * colSize - 1)) {
    const [diff, n1, n2] = diffs[idx];
    minDiff = diff;
    union(n1, n2);
    idx += 1;
  }

  return minDiff;
};