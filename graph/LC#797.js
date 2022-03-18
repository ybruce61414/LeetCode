// 797. All Paths From Source to Target
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const res = [];

  const dfs = (node, temp) => {
    if (graph.length === 0) return;

    temp.push(node);
    for (let neighbor of graph[node]) {
      dfs(neighbor, temp);
    }
    if (graph[node].length === 0) {
      res.push([...temp]);
    }
    temp.pop();
  };

  dfs(0, []);

  return res;
};

// console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]));
console.log(allPathsSourceTarget([]));
console.log(allPathsSourceTarget([[2], [2], []]));
