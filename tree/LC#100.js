//Same Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let result = true;

  const helper = (node1, node2) => {
    if (!node1 && !node2) {
      return;
    } else if (!node1 || !node2) {
      result = false;
      return;
    } else if (node1.val !== node2.val) {
      result = false;
      return;
    }

    helper(node1.left, node2.left);
    helper(node1.right, node2.right);
  };
  helper(p, q);
  return result;
};
