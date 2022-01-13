// 112. Path Sum
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  const dfs = (node, target) => {
    if (!node) return false;

    if (!node.left && !node.right) {
      return node.val === target;
    }

    let left = dfs(node.left, target - node.val);
    let right = dfs(node.right, target - node.val);

    return left || right;
  };

  return dfs(root, targetSum);
};
