//  102. Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let queue = [];
  let result = [];
  queue.push([root]);

  while (queue.length > 0) {
    let dequeueLeve = queue.shift();
    let levelResult = [];

    result.push(dequeueLeve);
    dequeueLeve.forEach((item) => {
      if (item.left) levelResult.push(item.left);
      if (item.right) levelResult.push(item.right);
    });
    queue.push(levelResult);
  }
  return result;
};
