// 662. Maximum Width of Binary Tree
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
var widthOfBinaryTree = function (root) {
  if (!root) return 0;
  let maxW = 0;
  let queue = [[root, 0]];

  while (queue.length > 0) {
    let len = queue.length;
    let startIdx = queue[0][1];
    let width = queue[queue.length - 1][1] - queue[0][1] + 1;

    for (let i = 0; i < len; i++) {
      let dequeue = queue.shift();
      const [node, idx] = dequeue;

      if (node.left) queue.push([node.left, 2 * (idx - startIdx) + 1]);
      if (node.right) queue.push([node.right, 2 * (idx - startIdx) + 2]);
    }

    maxW = Math.max(maxW, width);
  }

  return maxW;
};
