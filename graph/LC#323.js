// 323. Number of Connected Components in an Undirected Graph

// const countComponents = (n, edges) => {
//   // init
//   const adjList = Array.from({ length: n }, () => []);
//   const visited = Array.from({ length: n }, () => false);
//   let count = 0;
//
//   // build adjList
//   for (let [v1, v2] of edges) {
//     adjList[v1].push(v2);
//     adjList[v2].push(v1);
//   }
//
//   const dfs = (node) => {
//     visited[node] = true;
//
//     for (let neighbor of adjList[node]) {
//       if (!visited[neighbor]) dfs(neighbor);
//     }
//   };
//
//   for (let i = 0; i < n; i++) {
//     if (visited[i]) continue;
//     count += 1;
//     dfs(i);
//   }
//
//   return count;
// };



const countComponents = (n, edges) => {
  // 2023 2/21
  const adjList = {};

  for (let i = 0; i < n; i++) adjList[i] = [];

  for (let [n1, n2] of edges) {
    adjList[n1].push(n2);
    adjList[n2].push(n1);
  }

  const visited = {};

  const dfs = node => {
    if (node ===  null || node === undefined) return;
    visited[node] = true;

    for (let neighbor of adjList[node]) {
      if (!visited[neighbor]) dfs(neighbor);
    }
  };

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      count += 1;
      dfs(i);
    }
  }

  return count;
};

const countComponents2 = (n, edges) => {
  //  union-find
  const parent = {};
  let groups = n;

  for (let i = 0; i < n; i++) parent[i] = i;

  const find = node => {
    if (parent[node] !== node) {
      parent[node] = find(parent[node]);
    }
    return parent[node];
  };

  const union = (n1, n2) => {
    const r1 = find(n1);
    const r2 = find(n2);
    if (r1 !== r2) parent[r1] = r2;
  };

  for (let [n1, n2] of edges) {
    const r1 = find(n1);
    const r2 = find(n2);

    if (r1 !== r2) {
      groups -= 1;
      union(r1, r2);
    }
  }
  return groups;
}

// expected: 2
console.log(
  countComponents2(5, [
    [0, 1],
    [1, 2],
    [3, 4],
  ])
);


// expected: 1
console.log(
  countComponents2(5, [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
