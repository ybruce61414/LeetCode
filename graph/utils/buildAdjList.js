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
  buildAdjList(4, [
    [1, 0],
    [1, 2],
    [1, 3],
  ])
);
