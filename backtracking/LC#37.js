// 37. Sudoku Solver
var solveSudoku = function (board) {
  const recurSolve = (row, col) => {
    if (col === board[0].length) {
      col = 0;
      row += 1;
      if (row === board.length) return true;
    }

    if (board[row][col] === ".") {
      for (let i = 1; i <= 9; i++) {
        let res = isValidAtPos(row, col, `${i}`, board);
        if (res) {
          board[row][col] = `${i}`;
          if (recurSolve(row, col + 1)) return true;
          board[row][col] = ".";
        }
      }
    } else {
      return recurSolve(row, col + 1);
    }
  };

  recurSolve(0, 0);
  return board;
};

const isValidAtPos = (row, col, val, matrix) => {
  let rowInvalid = matrix[row].includes(val);
  let colInvalid = matrix.map((mRow) => mRow[col]).includes(val);
  if (rowInvalid || colInvalid) return false;

  let rowStart = Math.trunc(row / 3) * 3;
  let colStart = Math.trunc(col / 3) * 3;
  for (let i = rowStart; i < rowStart + 3; i++) {
    for (let j = colStart; j < colStart + 3; j++) {
      if (matrix[i][j] === val) return false;
    }
  }
  return true;
};

console.log(
  solveSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
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
