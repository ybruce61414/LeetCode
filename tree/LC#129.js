// 129. Sum Root to Leaf Numbers
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

var sumNumbers1 = function (root) {
  // backtracking
  let res = 0;

  const dfs = (node, temp) => {
    // base case
    if (!node) return;

    // leaf node
    if (!node.left && !node.right) {
      // join method return new object
      res += Number(temp.join(""));
      return;
    }

    for (let i of [node.left, node.right]) {
      if (!i) continue;
      temp.push(i.val);
      dfs(i, temp);
      temp.pop();
    }
  };

  dfs(root, [root.val]);

  return res;
};

// note
// let a = [1, 2, 3];
// console.log(a.join(""));
// console.log(a);

var sumNumbers2 = function (root) {
  // dfs
  let res = 0;

  const dfs = (node, curr) => {
    if (!node) return null;
    curr += node.val.toString();

    if (!node.left && !node.right) {
      //  leaf node
      res += parseInt(curr);
      return;
    }

    if (node.left) dfs(node.left, curr);
    if (node.right) dfs(node.right, curr);
  };

  dfs(root, "");

  return res;
};
