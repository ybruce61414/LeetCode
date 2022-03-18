// 79. Word Search

var exist = function (board, word) {
  const dfs = (row, col, pt) => {
    if (
      row < 0 ||
      col < 0 ||
      row >= board.length ||
      col >= board[0].length ||
      board[row][col] === "*"
    ) {
      return false;
    }

    if (word[pt] !== board[row][col]) return false;
    if (pt === word.length - 1) return true;

    let origin = board[row][col];
    board[row][col] = "*";
    let top = dfs(row - 1, col, pt + 1);
    let left = dfs(row, col - 1, pt + 1);
    let bottom = dfs(row + 1, col, pt + 1);
    let right = dfs(row, col + 1, pt + 1);
    board[row][col] = origin;
    return top || left || bottom || right;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }

  return false;
};
