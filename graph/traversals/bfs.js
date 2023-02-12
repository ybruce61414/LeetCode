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

const bfsIterative = start => {
  const queue = [];
  const visited = {};
  const path = [];

  // init
  queue.push(start);
  visited[start] = true;

  while (queue.length > 0) {
    const shift = queue.shift();
    path.push(shift);

    for (let neighbor of adjList[shift]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }

  return path;
};

console.log('--bfsIterative:', bfsIterative(3));
// 3 6 2 1 0 5 4 7

