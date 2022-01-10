// 111. Minimum Depth of Binary Tree
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
var minDepth = function (root) {
  const helper = (node) => {
    if (!node) return 0;
    let l = helper(node.left);
    let r = helper(node.right);

    // consider skewed tree
    if (l === 0 || r === 0) return l + r + 1;
    return Math.min(l, r) + 1;
  };

  return helper(root);
};
