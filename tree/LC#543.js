// 543. Diameter of Binary Tree
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
var diameterOfBinaryTree = function (root) {
  let maxLength = 0;

  const findDepth = (node) => {
    if (!node) return 0;
    let left = findDepth(node.left);
    let right = findDepth(node.right);

    maxLength = Math.max(maxLength, left + right);
    return Math.max(left, right) + 1;
  };
  findDepth(root);
  return maxLength;
};
