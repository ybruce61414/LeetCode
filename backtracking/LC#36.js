/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let len = board.length;
  let rows = Array.from({ length: len }, () => new Set());
  let cols = Array.from({ length: len }, () => new Set());
  let grids = Array.from({ length: len / 3 }, () =>
    Array.from({ length: len / 3 }, () => new Set())
  );

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let cur = board[i][j];
      if (cur === ".") continue;
      // row
      if (rows[i].has(cur)) {
        return false;
      } else {
        rows[i].add(cur);
      }
      // col
      if (cols[j].has(cur)) {
        return false;
      } else {
        cols[j].add(cur);
      }

      let m = Math.trunc(i / 3);
      let n = Math.trunc(j / 3);
      if (grids[m][n].has(cur)) {
        return false;
      } else {
        grids[m][n].add(cur);
      }
    }
  }

  return true;
};

console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
