const findDepth = (n, edges) => {
  const adjList = buildAdjList(n, edges);

  //bfs
  //playground
  let queue = [3];
  let visited = { 3: true };
  let depth = 0;

  while (queue.length > 0) {
    // 以層為單位去操作，記住此層個數，for操作完此層在進下一個while loop!
    let len = queue.length;
    depth += 1;

    for (let i = 0; i < len; i++) {
      let curr = queue.shift();

      adjList[curr].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
  }

  return depth - 1;
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
  findDepth(4, [
    [1, 0],
    [1, 2],
    [1, 3],
  ])
);
