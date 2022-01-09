// 103. Binary Tree Zigzag Level Order Traversal
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let res = [];
  const dfs = (node, index) => {
    if (!node) return null;
    if (!res[index]) res[index] = [];

    if (index % 2 === 0) {
      res[index].push(node.val);
    } else {
      res[index].unshift(node.val);
    }

    dfs(node.left, index + 1);
    dfs(node.right, index + 1);
  };

  dfs(root, 0);

  return res;
};
