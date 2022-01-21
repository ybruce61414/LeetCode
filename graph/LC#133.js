// 133. Clone Graph
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraphBFS = function (node) {
  if (!node) return null;
  const cloneStartNode = new Node(node.val);
  const visited = { [node.val]: cloneStartNode };
  const queue = [node];

  while (queue.length > 0) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const dequeue = queue.shift();
      const { val, neighbors } = dequeue;
      const currClone = visited[val];

      for (let neighbor of neighbors) {
        if (!visited[neighbor.val]) {
          const cloneNeighbor = new Node(neighbor.val);
          queue.push(neighbor);
          visited[neighbor.val] = cloneNeighbor;
        }
        currClone.neighbors.push(visited[neighbor.val]);
      }
    }
  }
  return cloneStartNode;
};

var cloneGraphBFS1 = function (node) {
  if (!node) return null;
  const cloneStartNode = new Node(node.val);
  const visited = { [node.val]: cloneStartNode };
  const queue = [node];

  while (queue.length > 0) {
    const dequeue = queue.shift();
    const { val, neighbors } = dequeue;
    const currClone = visited[val];

    for (let neighbor of neighbors) {
      if (!visited[neighbor.val]) {
        const cloneNeighbor = new Node(neighbor.val);
        queue.push(neighbor);
        visited[neighbor.val] = cloneNeighbor;
      }
      currClone.neighbors.push(visited[neighbor.val]);
    }
  }
  return cloneStartNode;
};

var cloneGraphDFS = function (node) {
  const visited = {};

  const dfs = (node) => {
    if (!node) return null;
    const { val, neighbors } = node;

    if (visited[val]) return visited[val];

    const clone = new Node(val);
    visited[val] = clone;

    for (let neighbor of neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  };

  return dfs(node);
};
