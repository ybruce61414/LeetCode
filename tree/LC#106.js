// 106. Construct Binary Tree from Inorder and Postorder Traversal
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const helper = (ino, pos) => {
    if (ino.length === 0 || pos.length === 0) return null;

    let rootIdx = pos[pos.length - 1];
    const node = new TreeNode(pos[rootIdx]);

    for (let i = rootIdx; i <= 0; i--) {
      if (pos[rootIdx] === ino[i]) {
        node.left = helper(ino.slice(0, i), pos.slice(0, i));
        node.right = helper(
          ino.slice(i + 1, ino.length),
          pos.slice(i, pos.length)
        );
        break;
      }
    }

    return node;
  };
  return helper(inorder, postorder);
};

var buildTreeBetter = function (inorder, postorder) {
  const helper = (pl, pr, il, ir) => {
    if (pl > pr || il > ir) return null;

    const node = new TreeNode(postorder[pr]);
    for (let i = ir; i >= il; i--) {
      if (postorder[pr] === inorder[i]) {
        node.left = helper(pl, i - 1 - (ir - pr), il, i - 1);
        node.right = helper(i - (ir - pr), pr - 1, i + 1, ir);
        break;
      }
    }

    return node;
  };
  return helper(0, postorder.length - 1, 0, inorder.length - 1);
};

let a = [1, 2, 3, 4];
console.log(a.slice(1, 1));
