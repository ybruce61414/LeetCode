// 130. Surrounded Regions
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const dfs = (row, col) => {
    if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) {
      return "*";
    }

    if (board[row][col] === "X") return;

    let curr = board[row][col];
    board[row][col] = "X";

    let top = dfs(row - 1, col);
    let left = dfs(row, col - 1);
    let bottom = dfs(row + 1, col);
    let right = dfs(row, col + 1);

    if ([top, left, bottom, right].some((item) => item === "*")) {
      board[row][col] = curr;
    }
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "O") dfs(i, j);
    }
  }

  return board;
};

console.log(
  solve([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ])
);

// [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

console.log(
  solve([
    ["O", "O", "O"],
    ["O", "O", "O"],
    ["O", "O", "O"],
  ])
);

// [["O","O","O"],["O","O","O"],["O","O","O"]]
