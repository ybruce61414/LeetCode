import { buildAdjList } from '../utils/buildAdjList.js';

// graph traversal demo
const edges = [
  [3, 6],
  [2, 6],
  [1, 6],
  [1, 5],
  [0, 1],
  [0, 2],
  [0, 4],
  [0, 7],
];

const adjList = buildAdjList(8, edges);

// method1: recursive
const dfsRecursive = start => {
  const path = [];
  const visited = {};

  const dfs = node => {

    if (node === undefined || node === null) return;

    visited[node] = true;
    path.push(node);

    for (let neighbor of adjList[node]) {
      if (!visited[neighbor]) dfs(neighbor);
    }
  };

  dfs(start);
  return path;
};


// method2: iterative
const dfsIterative = start => {
  const stack = [];
  const visited = {};
  const path = [];

  // init
  stack.push(start);
  visited[start] = true;

  while (stack.length > 0) {
    const pop = stack.pop();
    path.push(pop);

    for (let neighbor of adjList[pop]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        stack.push(neighbor);
      }
    }
  }

  return path;
};

console.log('--dfsRecursive:', dfsRecursive(3));
console.log('--dfsIterative:', dfsIterative(3));