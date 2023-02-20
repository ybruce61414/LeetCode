// 886. Possible Bipartition
/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  if (dislikes.length === 0) return true;

  const adjList = {};
  const visited = {};

  for (let i = 1; i <= n; i++) {
    adjList[i] = [];
    visited[i] = 0;
  }

  // build adjList
  for (let i = 0; i < dislikes.length; i++) {
    let [p1, p2] = dislikes[i];
    adjList[p1].push(p2);
    adjList[p2].push(p1);
  }

  for (let i = 1; i <= n; i++) {
    if (visited[i] !== 0) continue;

    const queue = [i];
    visited[i] = 1;

    while (queue.length > 0) {
      let dequeue = queue.shift();
      let currLabel = visited[dequeue];
      let neighborLabel = currLabel === 1 ? 2 : 1;

      for (let neighbor of adjList[dequeue]) {
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
  possibleBipartition(10, [
    [1, 2],
    [3, 4],
    [5, 6],
    [6, 7],
    [8, 9],
    [7, 8],
  ])
);

console.log(
  possibleBipartition(5, [
    [1, 2],
    [3, 4],
    [4, 5],
    [3, 5],
  ])
);
