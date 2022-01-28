// 653. Two Sum IV - Input is a BST
var findTarget = function (root, k) {
  const hashMap = {};

  const dfs = (node) => {
    if (!node) return false;
    if (node.val in hashMap) return true;
    hashMap[k - node.val] = true;

    return dfs(node.left) || dfs(node.right);
  };

  return dfs(root);
};
