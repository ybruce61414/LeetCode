/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

var validPath = function(n, edges, source, destination) {
  const parent = {};

  const find = node => {
    // path compression
    if (parent[node] !== node) parent[node] = find(parent[node]);
    return parent[node];
  };

  const union = (n1, n2) => {
    const r1 = find(n1);
    const r2 = find(n2);

    if (r1 !== r2) parent[r1] = r2;
  };

  // make set
  for (let i = 0; i < n; i++) parent[i] = i;

  // union
  for (const [n1, n2] of edges) union(n1, n2);

  const r1 = find(source);
  const r2 = find(destination);

  return r1 === r2;
};