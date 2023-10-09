
class TrieNode {
  constructor() {
    this.children = new Array(26)
    this.isEnd = false
  }
}

var Trie = function() {
  this.root = new TrieNode()
};

/**
 * @param {string} word
 * @return {void}
 */

Trie.prototype.insert = function(word) {
  let cur = this.root

  for (let i = 0; i < word.length; i++) {
    let char = word[i]
    let charCode = char.charCodeAt(0) - 'a'.charCodeAt(0)
    if (cur.children[charCode] === undefined) {
      cur.children[charCode] = new TrieNode()
    }
    cur = cur.children[charCode]
  }
  if (!cur.isEnd) cur.isEnd = true
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let cur = this.root

  for (let i = 0; i < word.length; i++) {
    let char = word[i]
    let charCode = char.charCodeAt(0) - 'a'.charCodeAt(0)

    if (cur.children[charCode] === undefined) return false
    cur = cur.children[charCode]
  }

  return cur.isEnd
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let cur = this.root

  for (let i = 0; i < prefix.length; i++) {
    let char = prefix[i]
    let charCode = char.charCodeAt(0) - 'a'.charCodeAt(0)

    if (cur.children[charCode] === undefined) return false
    cur = cur.children[charCode]
  }

  return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const testStr = 'ab'
const testArr = new Array(3)

console.log('---1', testStr.charCodeAt(0))
console.log('---2', 'a'.charCodeAt(0))
