// Maximum Depth of Binary Tree
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
var maxDepth = function (root) {
  //     if(!root) return 0;
  //     return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;

  let maxD = 0;
  const dive = (node, currD) => {
    if (!node) {
      maxD = Math.max(currD - 1, maxD);
      return;
    }

    dive(node.left, currD + 1);
    dive(node.right, currD + 1);
  };
  dive(root, 1);
  return maxD;
};

var maxDepthBetter = function (root) {
  if (!root) return 0;
  let left = maxDepthBetter(root.left);
  let right = maxDepthBetter(root.right);

  return Math.max(left, right) + 1;
};
