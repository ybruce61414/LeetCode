// 323. Number of Connected Components in an Undirected Graph

const countComponents = (n, edges) => {
  // init
  const adjList = Array.from({ length: n }, () => []);
  const visited = Array.from({ length: n }, () => false);
  let count = 0;

  // build adjList
  for (let [v1, v2] of edges) {
    adjList[v1].push(v2);
    adjList[v2].push(v1);
  }

  const dfs = (node) => {
    visited[node] = true;

    for (let neighbor of adjList[node]) {
      if (!visited[neighbor]) dfs(neighbor);
    }
  };

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    count += 1;
    dfs(i);
  }

  return count;
};

console.log(
  countComponents(5, [
    [0, 1],
    [1, 2],
    [3, 4],
  ])
);
// expected: 2

console.log(
  countComponents(5, [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
// expected: 1
