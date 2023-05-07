// 547. Number of Provinces
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum0 = function (isConnected) {
  // turn into adjList first
  let adjList = Array.from({ length: isConnected.length }, () => []);
  let visited = Array.from({ length: isConnected.length }, () => false);
  let count = 0;

  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < isConnected[0].length; j++) {
      if (i !== j && isConnected[i][j] !== 0) {
        adjList[i].push(j);
      }
    }
  }

  const dfs = (city) => {
    visited[city] = true;

    for (let neighbor of adjList[city]) {
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    }
  };

  for (let i = 0; i < adjList.length; i++) {
    if (!visited[i]) {
      count += 1;
      dfs(i);
    }
  }

  return count;
};

var findCircleNum = function (isConnected) {
  let visited = Array.from({ length: isConnected.length }, () => false);
  let count = 0;

  const dfs = (city) => {
    visited[city] = true;
    for (let i = 0; i < isConnected[city].length; i++) {
      if (i === city) continue;
      if (!visited[i] && isConnected[city][i] === 1) dfs(i);
    }
  };

  for (let j = 0; j < isConnected.length; j++) {
    if (!visited[j]) {
      count += 1;
      dfs(j);
    }
  }

  return count;
};

const isConnected1 = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
// 2

const isConnected2 = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];
// 3

console.log(findCircleNum(isConnected1));
