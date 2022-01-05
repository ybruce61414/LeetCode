// 110. Balanced Binary Tree
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let isBalanced = true;

  const dfs = (root) => {
    if (!root) return 0;
    let left = dfs(node.left);
    let right = dfs(node.right);
    if (Math.abs(left - right) > 1) isBalanced = false;

    return Math.max(left, right) + 1;
  };

  dfs(root);
  return isBalanced;
};

// console.log(isBalanced([3, 9, 20, null, null, 15, 7]));
// Output: true
