const makeConnected = (n, connections) => {
  const parent = {};
  let remain = 0;
  let group = n;

  const find = node => {
    if (parent[node] !== node) {
      parent[node] = find(parent[node]);
    }
    return parent[node];
  };

  const union = (n1, n2) => {
    const r1 = find(n1);
    const r2 = find(n2);
    if (r1 !== r2) parent[r1] = r2;
  };

  for (let i = 0; i < n; i++) parent[i] = i;

  for (const [n1, n2] of connections) {
    const r1 = find(n1);
    const r2 = find(n2);

    if (r1 === r2) {
      remain += 1;
    } else {
      union(r1, r2);
      group -= 1;
    }
  }

  return (remain >= group - 1)? group - 1: -1;
};

// Input: n = 4, connections = [[0,1],[0,2],[1,2]]
// Output: 1
// Explanation: Remove cable between computer 1 and 2 and place between computers 1 and 3.
const n = 4;
const connections = [[0,1],[0,2],[1,2]];

console.log('---res:', makeConnected(n, connections))