// 399. Evaluate Division
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const adjList = {};
  const res = [];

  // build adjList
  for (let i = 0; i < equations.length; i++) {
    const [src, dest] = equations[i];
    if (!adjList[src]) adjList[src] = [];
    if (!adjList[dest]) adjList[dest] = [];

    adjList[src].push({ node: dest, weight: values[i] });
    adjList[dest].push({ node: src, weight: 1 / values[i] });
  }

  //dfs
  for (let i = 0; i < queries.length; i++) {
    const [src, dest] = queries[i];
    const visited = {};

    const dfs = (node, weights) => {
      if (!adjList[src] || !adjList[dest]) {
        console.log("---re0 false", src, dest);
        return false;
      }

      if (node === dest) {
        let ans = weights.reduce((prev, curr) => prev * curr, 1);
        res.push(ans);
        return true;
      }

      for (let adjNode of adjList[node]) {
        const { node: neighbor, weight } = adjNode;
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          weights.push(weight);
          if (dfs(neighbor, weights)) return true;
          weights.pop();
        }
      }
      return false;
    };

    visited[src] = true;
    if (!dfs(src, [])) res.push(-1);
  }

  return res;
};

console.log(
  calcEquation(
    [
      ["a", "b"],
      ["b", "c"],
    ],
    [2.0, 3.0],
    [
      ["a", "c"],
      ["b", "a"],
      ["a", "e"],
      ["a", "a"],
      ["x", "x"],
    ]
  )
);
