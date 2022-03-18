// 297. Serialize and Deserialize Binary Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const res = [];

  const preorder = (node) => {
    if (!node) {
      res.push("#");
      return;
    }
    res.push(node.val);
    preorder(node.left);
    preorder(node.right);
  };

  preorder(root);

  return res.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let traversal = data.split(",");
  let idx = 0;

  const preorder = () => {
    let val = traversal[idx];
    idx += 1;
    if (val === "#") return null;

    const node = new TreeNode(val);
    node.left = preorder();
    node.right = preorder();
    return node;
  };

  return preorder();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

let s = "1,2,3,4,5";
console.log(s.split(","));
