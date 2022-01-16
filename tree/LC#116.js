// 116. Populating Next Right Pointers in Each Node
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  // dfs with level
  let res = [];

  const preorder = (node, level) => {
    if (!node) return;

    if (!res[level]) res[level] = [];

    let top = res[level][res[level].length - 1];
    if (top) top.next = node;
    node.next = null;
    res[level].push(node);

    preorder(node.left, level + 1);
    preorder(node.right, level + 1);
  };

  preorder(root, 0);
  return root;
};

var connect1 = function (root) {
  if (!root) return null;
  // bfs with level
  let queue = [root];

  while (queue.length > 0) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let dequeue = queue.shift();
      if (i !== len - 1) dequeue.next = queue[0];

      if (dequeue.left) queue.push(dequeue.left);
      if (dequeue.right) queue.push(dequeue.right);
    }
  }

  return root;
};

var connect2 = function (root) {
  // Time Complexity: O(N), we visit every node exactly once
  // Space Complexity: O(1), we simply relink given nodes
  const preorder = (node) => {
    if (!node || !node.left || !node.right) return;
    let left = node.left;
    let right = node.right;
    left.next = right;
    if (node.next) right.next = node.next.left;

    preorder(node.left);
    preorder(node.right);
  };
  preorder(root);
  return root;
};
