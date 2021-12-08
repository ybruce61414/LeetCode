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
  const pVal = p.val;
  const qVal = q.val;
  let currNode = root;

  while (currNode) {
    let currVal = currNode.val;
    if (pVal < currVal && qVal < currVal) {
      currNode = currNode.left;
    } else if (pVal > currVal && qVal > currVal) {
      currNode = currNode.right;
    } else {
      return currNode;
    }
  }
};

var lowestCommonAncestor_recur = function (root, p, q) {
  //  recursion
  if (q.val === root.val || p.val === root.val) {
    return root;
  }

  if (
    (root.val < q.val && p.val < root.val) ||
    (root.val > q.val && p.val > root.val)
  ) {
    return root;
  }

  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return lowestCommonAncestor(root.right, p, q);
  }
};
