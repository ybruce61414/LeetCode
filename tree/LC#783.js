// 783. Minimum Distance Between BST Nodes
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
var minDiffInBST = function (root) {
  let min = Infinity;
  let temp = null;

  const inorder = (node) => {
    if (!node) return;
    inorder(node.left);
    // operation zone
    if (temp !== null) min = Math.min(min, node.val - temp);
    temp = node.val;
    inorder(node.right);
  };

  inorder(root);
  return min;
};
