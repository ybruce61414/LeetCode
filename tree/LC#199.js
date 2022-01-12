// 199. Binary Tree Right Side View
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  const res = [];

  const dfs = (node, level) => {
    if (!node) return;
    if (res[level] === undefined) {
      res.push(node.val);
    }
    if (!node.left && !node.right) return;
    dfs(node.right, level + 1);
    dfs(node.left, level + 1);
  };

  dfs(root, 0);
  return res;
};
