// 114. Flatten Binary Tree to Linked List
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten1 = function (root) {
  let res = [];
  let parent = root;

  // preoder traversal generating res
  const dfs = (node) => {
    if (!node) return null;
    res.push(node);

    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);

  if (res.length === 0) return null;

  for (let i = 1; i < res.length; i++) {
    parent.right = res[i];
    parent.left = null;
    parent = parent.right;
  }

  return root;
};

var flatten = function (root) {
  let prevNode = null;

  const dfs = (node) => {
    if (!node) return;
    dfs(node.right);
    dfs(node.left);

    node.right = prevNode;
    node.left = null;
    prevNode = node;
  };

  dfs(root);

  return root;
};
