class TrieNode {
  constructor() {
    this.children = new Array(26)
    this.isEnd = false
  }
}
var WordDictionary = function() {
  this.root = new TrieNode()
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let cur = this.root
  for (let i = 0; i < word.length; i++) {
    let codeAt = word[i].charCodeAt(0) - 'a'.charCodeAt(0)

    if (!cur.children[codeAt]) {
      cur.children[codeAt] = new TrieNode()
    }
    cur = cur.children[codeAt]
  }
  cur.isEnd = true
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  const dfs = (node, idx) => {
    if (!node) return false
    if (idx === word.length) return node.isEnd

    let char = word[idx]
    let codeAt = char.charCodeAt(0) - 'a'.charCodeAt(0)
    if (char === '.') {
      for (const childNode of node.children) {
        if (dfs(childNode, idx + 1)) return true
      }
    }
    return dfs(node.children[codeAt], idx + 1)
  }

  return dfs(this.root, 0)
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */