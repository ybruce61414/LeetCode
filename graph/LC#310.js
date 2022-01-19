// 310. Minimum Height Trees
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  const adjList = buildAdjList(n, edges);
  let min = Infinity;
  let res = [];

  for (let i = 0; i < n; i++) {
    //bfs
    let queue = [{ node: i, level: 0 }];
    let visited = { [i]: true };
    let maxLevel = 0;

    while (queue.length > 0) {
      let curr = queue.shift();
      const { node, level } = curr;
      maxLevel = Math.max(maxLevel, level);

      adjList[node].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push({ node: neighbor, level: level + 1 });
        }
      });
    }

    min = Math.min(min, maxLevel);
  }

  // //bfs
  // let queue = [{ node: 1, level: 0 }];
  // let visited = { 1: true };
  // let maxLevel = 0;
  // // const res = [];
  //
  // while (queue.length > 0) {
  //   let curr = queue.shift();
  //   const { node, level } = curr;
  //   // res.push(node);
  //   maxLevel = Math.max(maxLevel, level);
  //
  //   adjList[node].forEach((neighbor) => {
  //     if (!visited[neighbor]) {
  //       visited[neighbor] = true;
  //       queue.push({ node: neighbor, level: level + 1 });
  //     }
  //   });
  // }

  return min;
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
