// 863. All Nodes Distance K in Binary Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  const parentMap = {};
  const visited = { [target.val]: true };
  let queue = [{ node: target, level: 0 }];
  let res = [];

  // using to build adjacency list
  const dfs = (node) => {
    if (!node) return;
    if (node.left) {
      parentMap[node.left.val] = node;
      dfs(node.left);
    }
    if (node.right) {
      parentMap[node.right.val] = node;
      dfs(node.right);
    }
  };

  dfs(root);

  // bfs to find k distance node
  while (queue.length > 0) {
    let dequeue = queue.shift();
    const { node, level } = dequeue;
    if (level === k) res.push(node.val);

    for (let neighbor of [node.left, node.right, parentMap[node.val]]) {
      if (!neighbor || neighbor.val in visited) continue;
      visited[neighbor.val] = true;
      queue.push({ node: neighbor, level: level + 1 });
    }
  }

  return res;
};
