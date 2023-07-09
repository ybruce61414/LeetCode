var sumRootToLeaf = function(root) {
  const res = []

  const dfs = (node, temp) => {
    if (!node) {
      res.push([...temp])
      return;
    }

    temp.push(node.val)

    if (node.left) dfs(node.left, temp)
    if (node.right) dfs(node.right, temp)
  }

};

console.log('---', parseInt('11', 2))

