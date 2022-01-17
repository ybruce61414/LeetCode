// Graph Valid Tree
const validTree = (n, edges) => {
  const adjList = buildAdjList(n, edges);
  const visited = {};

  const dfs = (vertex, parent) => {
    visited[vertex] = 1;
    for (let neighbor of adjList[vertex]) {
      if (visited[neighbor] !== 1) {
        if (dfs(neighbor, vertex)) return true;
      } else {
        if (neighbor !== parent) return true;
      }
    }
    return false;
  };

  return !dfs(0, -1) && Object.keys(visited).length === n;
};

const buildAdjList = (n, edges) => {
  // note new Array(num).fill([]);  會都是同一個array
  let adjList = Array.from({ length: n }, () => []);

  for (let i = 0; i < edges.length; i++) {
    const [src, dest] = edges[i];
    adjList[src].push(dest);
    adjList[dest].push(src);
  }
  return adjList;
};

console.log(
  validTree(5, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
  ])
);

console.log(
  validTree(5, [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 3],
    [1, 4],
  ])
);
