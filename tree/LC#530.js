// 530. Minimum Absolute Difference in BST
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
var getMinimumDifference = function (root) {
  let min = Infinity;
  let temp = "";

  const inorder = (node) => {
    if (!node) return;

    inorder(node.left);
    if (temp !== "") {
      min = Math.min(min, node.val - temp);
    }
    temp = node.val;
    inorder(node.right);
  };

  inorder(root);
  return min;
};

console.log(getMinimumDifference([4, 2, 6, 1, 3]));
// 1
