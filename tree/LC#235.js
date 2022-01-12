// Lowest Common Ancestor of a Binary Search Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor_iter = function (root, p, q) {
  //  iteration
  let currNode = root;

  while (currNode) {
    let currVal = currNode.val;
    if (p.val < currVal && q.val < currVal) {
      currNode = currNode.left;
    } else if (p.val > currVal && q.val > currVal) {
      currNode = currNode.right;
    } else {
      return currNode;
    }
  }
};

var lowestCommonAncestor_recur = function (root, p, q) {
  //  recursion

  if (p.val < root.val && q.val < root.val) {
    lowestCommonAncestor_recur(root.left, p, q);
  }

  if (p.val > root.val && q.val > root.val) {
    lowestCommonAncestor_recur(root.right, p, q);
  }

  return root;
};
