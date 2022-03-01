/**
 * @param {number} capacity
 */

class Node {
  constructor(key, val, next, prev) {
    this.key = key;
    this.val = val;
    this.next = next === undefined ? null : next;
    this.prev = prev === undefined ? null : prev;
  }
}
var LRUCache = function (capacity) {
  this.cap = capacity;
  this.cache = new Map();
  this.left = new Node("left", 0);
  this.right = new Node("right", 0);

  // left = LRU, right = most recent
  this.left.next = this.right;
  this.right.prev = this.left;
};

// helper func
LRUCache.prototype.remove = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

LRUCache.prototype.insert = function (node) {
  //insert to the rightmost before dummy node
  //means recently used
  node.prev = this.right.prev;
  node.next = this.right;
  this.right.prev.next = node;
  this.right.prev = node;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    this.remove(this.cache.get(key));
    this.insert(this.cache.get(key));
    return this.cache.get(key).val;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let node = new Node(key, val);

  if (this.cache.has(key)) {
    this.remove(this.cache.get(key));
  }

  // update d-list and hashMap
  this.cache.set(key, node);
  this.insert(node);

  if (this.cache.size > this.cap) {
    let lru = this.left.next;
    this.remove(lru);
    this.cache.delete(lru.key);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
