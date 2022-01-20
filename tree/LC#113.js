// 113. Path Sum II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const res = [];

  const backtrack = (node, temp, target) => {
    if (!node) return;

    // leaf node
    if (!node.left && !node.right) {
      if (node.val === target) res.push([...temp, node.val]);
      return;
    }

    // for (let child of [node.left, node.right]) {
    //   temp.push(node.val);
    //   backtrack(child, temp, target - node.val);
    //   temp.pop();
    // }

    temp.push(node.val);
    backtrack(node.left, temp, target - node.val);
    backtrack(node.right, temp, target - node.val);
    temp.pop();
  };

  backtrack(root, [], targetSum);
  return res;
};
