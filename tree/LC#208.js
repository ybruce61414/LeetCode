// Implement Trie (Prefix Tree)
var Trie = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (!node[char]) {
      node[char] = {};
    }
    node = node[char];
  }

  node["endChar"] = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root;

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (!node[char]) return false;

    node = node[char];
  }

  return node["endChar"] || false;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  // root = { a: { p : { 'endChar' : true } } };
  let node = this.root;

  for (let i = 0; i < prefix.length; i++) {
    let char = prefix[i];
    if (!node[char]) return false;

    node = node[char];
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const trieObj = new Trie();

trieObj.insert("hello");

console.log(trieObj.root);
console.log(trieObj.search("hell"));
console.log(trieObj.startsWith("hel"));
