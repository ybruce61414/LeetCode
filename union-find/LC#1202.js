/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
  const parent = {};
  const position = {};
  const chars = {};
  const res = Array(s.length).fill('');

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

  // init
  for (let i = 0; i < s.length; i++) parent[i] = i;

  // union
  for (const [p1, p2] of pairs) {
    const r1 = find(p1);
    const r2 = find(p2);
    if (r1 !== r2) union(r1, r2);
  }

  for (let i = 0; i < s.length; i++) {
    const root = find(i);
    position[root]? position[root].push(i): position[root] = [i];
    chars[root]? chars[root].push(s[i]): chars[root] = [s[i]];
  }

  for (const group of Object.keys(position)) {
    chars[group].sort();

    for (let i = 0; i < position[group].length; i++) {
      res[position[group][i]] = chars[group][i];
    }
  }

  console.log('--position-', position)
  return res.join('');
};

const s = "dcab";
const pairs = [[0,3],[1,2]];

const s2 = "dcab"
const pairs2 = [[0,3],[1,2],[0,2]]

const s3 = "vbjjxgdfnru"
const pairs3 = [[8,6],[3,4],[5,2],[5,5],[3,5],[7,10],[6,0],[10,0],[7,1],[4,8],[6,2]]
// Expected: "bdfgjjnuvrx"

console.log(smallestStringWithSwaps(s3, pairs3))