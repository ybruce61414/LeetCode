//  Invert Binary Tree
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
 * @return {TreeNode}
 */

var invertTree = function (root) {
  const helper = (node) => {
    if (!node) return;

    [node.left, node.right] = [node.right, node.left];
    if (node.left) helper(node.left);
    if (node.right) helper(node.right);
  };

  helper(root);
  return root;
};
