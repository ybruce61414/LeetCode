// 1305. All Elements in Two Binary Search Trees
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  let l1 = [];
  let l2 = [];
  let sorted = [];

  const inorder = (node, res) => {
    if (!node) return;

    inorder(node.left, res);
    res.push(node.val);
    inorder(node.right, res);
  };

  inorder(root1, l1);
  inorder(root2, l2);

  while (l1.length > 0 && l2.length > 0) {
    if (l1[0] < l2[0]) {
      sorted.push(l1.shift());
    } else {
      sorted.push(l2.shift());
    }
  }

  return [...sorted, ...l1, ...l2];
};
