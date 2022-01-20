// 310. Minimum Height Trees
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0];
  const adjList = buildAdjList(n, edges);
  const degree = adjList.map((vertices) => vertices.length);
  const queue = [];
  let res = [];

  //initialize queue
  degree.forEach((value, index) => {
    if (value === 1) queue.push(index);
  });

  while (queue.length > 0) {
    const len = queue.length;

    res = [];

    for (let i = 0; i < len; i++) {
      const dequeue = queue.shift();
      res.push(dequeue);

      degree[dequeue] -= 1;
      for (let neighbor of adjList[dequeue]) {
        degree[neighbor] -= 1;
        if (degree[neighbor] === 1) queue.push(neighbor);
      }
    }
  }

  return res;
};

const buildAdjList = (n, edges) => {
  const adjList = Array.from({ length: n }, () => []);

  for (let i = 0; i < edges.length; i++) {
    const [src, dest] = edges[i];
    adjList[src].push(dest);
    adjList[dest].push(src);
  }
  return adjList;
};

console.log(
  findMinHeightTrees(4, [
    [1, 0],
    [1, 2],
    [1, 3],
  ])
);

console.log(
  findMinHeightTrees(6, [
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 4],
    [5, 4],
  ])
);
console.log(
  findMinHeightTrees(6, [
    [0, 1],
    [0, 2],
    [0, 3],
    [3, 4],
    [4, 5],
  ])
);

console.log(
  findMinHeightTrees(6, [
    [0, 1],
    [0, 2],
    [0, 3],
    [3, 4],
    [4, 5],
  ])
);

console.log(findMinHeightTrees(2, [[0, 1]]));

console.log(findMinHeightTrees(1, []));
