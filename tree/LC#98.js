//  Validate Binary Search Tree
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

var isValidBST_method1 = function (root) {
  let isValid = true;

  const helper = (node, min, max) => {
    if (node === null) return;

    if (
      (min !== null && node.val <= min) ||
      (max !== null && node.val >= max)
    ) {
      isValid = false;
      return;
    }

    helper(node.left, min, node.val);
    helper(node.right, node.val, max);
  };

  helper(root, null, null);
  return isValid;
};

var isValidBST_method2 = function (root) {
  //faster
  let isValid = true;

  const helper = (node, min, max) => {
    if (
      (min !== null && node.val <= min) ||
      (max !== null && node.val >= max)
    ) {
      isValid = false;
      return;
    }

    if (node.left) helper(node.left, min, node.val);
    if (node.right) helper(node.right, node.val, max);
  };

  helper(root, null, null);
  return isValid;
};
