// 130. Surrounded Regions
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const dfs = (row, col, label) => {
    if (
      row < 0 ||
      col < 0 ||
      row >= board.length ||
      col >= board[0].length ||
      board[row][col] === "X" ||
      board[row][col] === label
    ) {
      return;
    }

    board[row][col] = label;
    dfs(row - 1, col, label);
    dfs(row, col - 1, label);
    dfs(row + 1, col, label);
    dfs(row, col + 1, label);
  };

  for (let i = 0; i < board.length; i++) {
    dfs(i, 0, "*");
    dfs(i, board[0].length - 1, "*");
  }
  for (let j = 0; j < board[0].length; j++) {
    dfs(0, j, "*");
    dfs(board.length - 1, j, "*");
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "*") {
        board[i][j] = "O";
      } else if (board[i][j] === "O") {
        dfs(i, j, "X");
      }
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
