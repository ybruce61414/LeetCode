/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  const parent = {};

  const find = node => {
    if (parent[node] !== node) parent[node] = find(parent[node]);
    return parent[node];
  };

  const union = (n1, n2) => {
    const root1 = find(n1);
    const root2 = find(n2);
    if (root1 !== root2) parent[root1] = root2;
  };

  for (const [n1, n2] of edges) {
    if (!parent[n1]) parent[n1] = n1;
    if (!parent[n2]) parent[n2] = n2;

    const root1 = find(n1);
    const root2 = find(n2);

    if (root1 === root2) {
      return [n1, n2];
    } else {
      union(root1, root2);
    }
  }
};

const edges = [[1,2],[1,3],[2,3]];
const edges2 = [[1,2],[2,3],[3,4],[1,4],[1,5]];

// Output: [2,3]
console.log('--res0', findRedundantConnection(edges));
console.log('--res1', findRedundantConnection(edges2));

//  thought:
//  continuing union two node before checking whether they are in the same tree,
//  if they are in the same tree, then return the pair of nodes.
