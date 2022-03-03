// 212. Word Search II
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!node[char]) {
        node[char] = {};
      }
      node = node[char];
      node.count = (node.count || 0) + 1;
    }
    node.word = word;
  }

  remove(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      node[char].count -= 1;

      if (node[char].count === 0) {
        delete node[char];
        return;
      }
      node = node[char];
    }
    delete node.word;
  }
}

var findWords = function (board, words) {
  const trie = new Trie();
  const m = board.length;
  const n = board[0].length;
  let res = [];

  for (let word of words) {
    trie.insert(word);
  }

  const dfs = (row, col, node) => {
    if (node.word) {
      console.log("---w", node);
      res.push(node.word);
      trie.remove(node.word);
    }

    if (row < 0 || col < 0 || row >= m || col >= n) {
      return;
    }

    let char = board[row][col];
    if (char === "*" || !node[char]) return;

    let nextNode = node[char];

    board[row][col] = "*";
    console.log("-going t--", nextNode, trie);
    dfs(row - 1, col, nextNode);
    console.log("-going l--", nextNode, trie);
    dfs(row, col - 1, nextNode);
    console.log("-going b--", nextNode, trie);
    dfs(row + 1, col, nextNode);
    console.log("-going r--", nextNode, trie);
    dfs(row, col + 1, nextNode);
    board[row][col] = char;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j, trie.root);
    }
  }

  return res;
};
