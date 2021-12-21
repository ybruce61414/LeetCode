// 79. Word Search
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let h = board.length;
  let w = board[0].length;

  const dfs = (index, x, y) => {
    if (x < 0 || x >= h || y < 0 || y >= w || word[index] !== board[x][y]) {
      return false;
    }

    if (index === word.length - 1) return true;

    let temp = board[x][y];
    board[x][y] = 0;

    const found =
      dfs(index + 1, x + 1, y) ||
      dfs(index + 1, x - 1, y) ||
      dfs(index + 1, x, y + 1) ||
      dfs(index + 1, x, y - 1);
    board[x][y] = temp;

    return found;
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (dfs(0, i, j)) {
        return true;
      }
    }
  }
  return false;
};

var exist2 = function (board, word) {
  let found = false;

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === word[0]) {
        dfs(row, col, 0, word);
      }
    }
  }

  function dfs(row, col, count, word) {
    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[0].length ||
      board[row][col] !== word[count] ||
      found
    ) {
      return;
    }

    if (count === word.length - 1) {
      found = true;
      return;
    }

    let temp = board[row][col];
    board[row][col] = "";

    dfs(row + 1, col, count + 1, word);
    dfs(row - 1, col, count + 1, word);
    dfs(row, col + 1, count + 1, word);
    dfs(row, col - 1, count + 1, word);
    board[row][col] = temp;
  }

  return found;
};

console.log(
  exist2(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
// expected :true

console.log(
  exist2(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "SEE"
  )
);
// expected :true

console.log(
  exist2(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  )
);
// expected :false

console.log(
  exist2(
    [
      ["C", "A", "A"],
      ["A", "A", "A"],
      ["B", "C", "D"],
    ],
    "AAB"
  )
);
// expected :true
