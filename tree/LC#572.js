// 572. Subtree of Another Tree
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree1 = function (root, subRoot) {
  if (!root && !subRoot) return true;
  if (!root || !subRoot) return false;

  return (
    isSameTree(root, subRoot) ||
    isSubtree1(root.left, subRoot) ||
    isSubtree1(root.right, subRoot)
  );
};

var isSubtree2 = function (root, subRoot) {
  if (!root || !subRoot) return false;
  if (root.val === subRoot.val && isSameTree(root, subRoot)) return true;
  return isSubtree2(root.left, subRoot) || isSubtree2(root.right, subRoot);
};

const isSameTree = (n1, n2) => {
  if (!n1 && !n2) return true;
  if (!n1 || !n2) return false;
  if (n1.val !== n2.val) return false;

  return isSameTree(n1.left, n2.left) && isSameTree(n1.right, n2.right);
};
