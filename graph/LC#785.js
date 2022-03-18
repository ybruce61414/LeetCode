// 785. Is Graph Bipartite?
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  const visited = Array.from({ length: graph.length }, () => 0);
  // label 1: red
  // label 2: green

  for (let i = 0; i < graph.length; i++) {
    if (visited[i] !== 0) continue;

    const queue = [i];
    // mark as red
    visited[i] = 1;

    while (queue.length > 0) {
      let dequeue = queue.shift();
      let currLabel = visited[dequeue];
      let neighborLabel = currLabel === 1 ? 2 : 1;

      for (let neighbor of graph[dequeue]) {
        if (!visited[neighbor]) {
          visited[neighbor] = neighborLabel;
          queue.push(neighbor);
        } else {
          if (visited[neighbor] !== neighborLabel) return false;
        }
      }
    }
  }

  return true;
};

console.log(
  isBipartite([
    [1, 3],
    [0, 2],
    [1, 3],
    [0, 2],
  ])
);
