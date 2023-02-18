// 787. Cheapest Flights Within K Stops
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */

// backtracking method
var findCheapestPrice = function(n, flights, src, dst, k) {
  const adjList = {};
  const visited = {};
  let res = Infinity;

  // init
  for (let i = 0; i < n; i++) {
    adjList[i] = [];
    visited[i] = false;
  }

  // build adjList
  for (let [src, dst, weight] of flights) {
    adjList[src].push({ node: dst, weight });
  }

  const dfs = (node, temp) => {
    if (temp.length === k + 1 && node !== dst) return;
    if (node === dst) {
      let ans = temp.reduce((prev, cur) => cur + prev);
      res = Math.min(res, ans);
      return;
    }

    visited[node] = true;

    for (let neighbor of adjList[node]) {
      if (!visited[neighbor]) {
        const { node, weight } = neighbor;
        temp.push(weight);
        dfs(node, temp);
        temp.pop();
      }
    }
    visited[node] = false;
  };

  // start calculating
  dfs(src, []);

  return res === Infinity? -1: res;
};


// bfs
const findCheapestPrice1 = (n, flights, src, dst, k) => {
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
  const queue = [[src, 0]];
  distance[src] = 0;
  let stop = 0;

  while(queue.length > 0) {
    if (stop > k) break;

    // 這裡用for loop的原因是為了要抓出什麼時候算一次stop(就是同一個level的都做完，stop加一次)
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      const cur = queue.shift();

      for (let neighbor of adjList[cur[0]]) {
        const { node: neighborNode, weight } = neighbor;

        // 距離不能用distance去算，因為stops會算錯，所以要每次給新的distFormSrc：example res6
        let distFormSrc = cur[1] + weight;
        if (distFormSrc < distance[neighborNode]) {
          distance[neighborNode] = distFormSrc;
          queue.push([neighborNode, distFormSrc]);
        }
      }
    }
    stop += 1;
  }


  return distance[dst] === Infinity? -1: distance[dst];
};


const n = 10;
const flights = [[3,4,4],[2,5,6],[4,7,10],[9,6,5],[7,4,4],[6,2,10],[6,8,6],[7,9,4],[1,5,4],[1,0,4],[9,7,3],[7,0,5],[6,5,8],[1,7,6],[4,0,9],[5,9,1],[8,7,3],[1,2,6],[4,1,5],[5,2,4],[1,9,1],[7,8,10],[0,4,2],[7,2,8]];
const src = 6;
const dst = 0;
const k = 7;

// expected: 14
console.log('-----res1:', findCheapestPrice1(n, flights, src, dst, k))

// expected: 700
console.log('----res2', findCheapestPrice1(4, [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], 0, 3, 1));

// expected: 200
console.log('-----res3:', findCheapestPrice1(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 1))

// expected: 6
console.log('-----res4', findCheapestPrice1(4, [[0,1,1],[0,2,5],[1,2,1],[2,3,1]], 0, 3, 1));
