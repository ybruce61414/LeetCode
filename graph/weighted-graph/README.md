##  Weighted Graph

1. [LeetCode 399. Evaluate Division](https://leetcode.com/problems/evaluate-division/) ``medium``
2. [LeetCode 787. Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/description/) ``medium`` it looks basic but **hard**
- Strategy:
- > dfs/bfs: adjList 要紀錄weight：
  > - object form：{ node: 1, weight: 3 },
  > - array form: [node, weight]
- ex 787:
```js
// shortesst path: bfs（因為這裡有指定走k次的限制，所以可以用bfs）
// 1. 要注意stop的計算次數，所以每次while進來的只能執行那一層level的次數，就要計算一次stop
// 2. 每個點與source距離都是獨立計算，不能用distance裡紀錄的值

// ps: 也可以用dfs + backtracking，我蠻喜歡這做法，但會跑不過，time complexity 超過bfs

const findCheapestPrice = (n, flights, src, dst, k) => {
  const adjList = {};
  const distance = [];

  // init
  for (let i = 0; i < n; i++) {
    adjList[i] = [];
    distance[i] = Infinity;
  }

  // build adjList
  for (let [src, dst, weight] of flights) {
    adjList[src].push({ node: dst, weight });
  }

  // init
  // queue裡存放的形式：[node, 該點與src的距離]
  const queue = [[src, 0]];

  // distance 紀錄src到每個點的最小距離
  distance[src] = 0;

  // stop記錄擴張的次數
  let stop = 0;

  while(queue.length > 0) {
    if (stop > k) break;

    // loop每一圈(level)的次數，stop存活的週期
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      const cur = queue.shift();

      for (let neighbor of adjList[cur[0]]) {
        const { node: neighborNode, weight } = neighbor;

        // 不能用distance裡的值去算，因為算出來的值對應到的level會對應錯誤
        if (cur[1] + weight < distance[neighborNode]) {
          distance[neighborNode] = cur[1] + weight;
          queue.push([neighborNode, cur[1] + weight]);
        }
      }
    }
    // 每計算完一個level，就往外擴張
    stop += 1;
  }

  return distance[dst] === Infinity? -1: distance[dst];
};
```