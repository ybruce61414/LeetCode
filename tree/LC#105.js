// 105. Construct Binary Tree from Preorder and Inorder Traversal
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }

  const node = new TreeNode(preorder[0]);

  for (let i = 0; i < preorder.length; i++) {
    if (preorder[0] === inorder[i]) {
      node.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
      node.right = buildTree(
        preorder.slice(i + 1, preorder.length),
        inorder.slice(i + 1, inorder.length)
      );
      break;
    }
  }

  return node;
};
