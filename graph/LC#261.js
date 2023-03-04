// Graph Valid Tree

const validTree = (n, edges) => {
  const adjList = {};
  const visited = {};

  // init
  for (let i = 0; i < n; i++) adjList[i] = [];
  for (let [n1, n2] of edges) {
    adjList[n2].push(n1);
    adjList[n1].push(n2);
  }

  let res = true;
  const dfs = (node, parent) => {
    visited[node] = true;

    for (let neighbor of adjList[node]) {
      if (visited[neighbor]) {
        if (neighbor !== parent) {
          res = res && false;
        }
      } else {
        dfs(neighbor, node);
      }
    }
  };

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      if (count === 1) return false;
      dfs(i, -1);
      count += 1;
    }
  }
  return res;
};



const validTree2 = (n, edges) => {
  const parent = {};
  let group = n;

  for (let i = 0; i < n; i++) parent[i] = i;

  const find = node => {
    if (parent[node] !== node) parent[node] = find(parent[node]);
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
      union(r1, r2);
      group -= 1;
    } else {
      return false;
    }
  }
  return group === 1;
}

// true
console.log(
  validTree2(5, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
  ])
);

// false
console.log(
  validTree2(5, [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 3],
    [1, 4],
  ])
);
