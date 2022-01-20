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
var cloneGraph = function (node) {
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

var cloneGraph1 = function (node) {
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
