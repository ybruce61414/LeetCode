##  Bipartite Graph

1. [LeetCode 785. Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/) ``medium``
2. [LeetCode 886. Possible Bipartition](https://leetcode.com/problems/possible-bipartition/) ``medium``
- Strategy:
- > dfs: 每次踩到的點，記下與此點相鄰的label都要與之相反（neighbor label） -> loop neighbors -> 如果沒有採過此點，則遞迴下去，如果已經採過此點：判斷label與neighborlabel有無相同，相同則代表不是bigraph。
- ex #785:
```js
// dfs recursive-way

var isBipartite = function(graph) {
  // 記錄每個點的狀態：0:未踩,1：1號群, 2：2號群，1, 2群不相鄰
  const visited = {};

  // init 
  for (let i = 0; i < graph.length; i++) visited[i] = 0;

  let res = true;

  const dfs = (node, label) => {
      visited[node] = label;

      // 推算出相鄰的label
      const neighborLabel = label === 1? 2: 1;

      for (let neighbor of graph[node]) {
          if (!visited[neighbor]) {
              dfs(neighbor, neighborLabel);
          } else if (visited[neighbor] === label) {
              // 與同label相鄰：not bigraph
              res = res && false;
              break;
          } else {
              res = res && true
          }
      }
  };

  // 注意可能有斷開的component（connected component)
  // 所以要loop每個點
  for (let i = 0; i < graph.length; i++) {
      if (!visited[i]) dfs (i, 1);
  }

  return res;
};
```