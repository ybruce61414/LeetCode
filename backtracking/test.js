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

const map = new Map()

map.set('gender', 'male')
map.set('name', 'viola')
let [first, second] = map.keys()

console.log(first, second, map.keys())

