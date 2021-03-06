// 124. Binary Tree Maximum Path Sum
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
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = -Infinity;

  const dfs = (node) => {
    if (!node) return 0;

    let left = Math.max(dfs(node.left), 0);
    let right = Math.max(dfs(node.right), 0);
    max = Math.max(max, left + right + node.val);

    return Math.max(left, right) + node.val;
  };

  dfs(root);
  return max;
};

var maxPathSum1 = function (root) {
  let maxSum = -Infinity;

  const dfs = (node) => {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);

    let innerMaxSum = Math.max(left, 0) + Math.max(right, 0) + node.val;
    maxSum = Math.max(maxSum, innerMaxSum);

    let outterMaxSum = Math.max(left, right) + node.val;
    return Math.max(outterMaxSum, 0);
  };

  dfs(root);
  return maxSum;
};
