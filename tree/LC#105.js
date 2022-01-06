// 105. Construct Binary Tree from Preorder and Inorder Traversal
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }

  const node = new TreeNode(preorder[0]);

  for (let i = 0; i < preorder.length; i++) {
    if (preorder[0] === inorder[i]) {
      node.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
      node.right = buildTree(
        preorder.slice(i + 1, preorder.length),
        inorder.slice(i + 1, inorder.length)
      );
      break;
    }
  }

  return node;
};

var buildTreeAnswer = function (preorder, inorder) {
  const helper = (pl, pr, il, ir) => {
    if (pl > pr || il > ir) return null;

    const node = new TreeNode(preorder[pl]);

    for (let i = il; i <= ir; i++) {
      if (preorder[pl] === inorder[i]) {
        node.left = helper(pl + 1, i - il + pl, il, i - 1);
        node.right = helper(pl + i + 1 - il, pr, i + 1, ir);
        break;
      }
    }
    return node;
  };

  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};

// corner case: [1,2,3]
// [3,2,1]
