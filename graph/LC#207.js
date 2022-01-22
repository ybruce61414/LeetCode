// 207. Course Schedule
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const preMap = Array.from({ length: numCourses }, () => []);
  const visitSet = {};

  for (let item of prerequisites) {
    const [crs, pre] = item;
    preMap[crs].push(pre);
  }

  const dfs = (crs) => {
    // detect cycle
    if (visitSet[crs]) return false;

    // has no prerequisites
    if (preMap[crs].length === 0) return true;

    visitSet[crs] = true;
    for (let pre of preMap[crs]) {
      console.log(pre);
      // whether pre can be done
      if (!dfs(pre)) return false;
    }
    visitSet[crs] = false;
    preMap[crs] = [];
    return true;
  };

  for (let crs = 0; crs < numCourses; crs++) {
    if (!dfs(crs)) return false;
  }

  return true;
};

var canFinishKahn = function (numCourses, prerequisites) {
  const adjList = Array.from({ length: numCourses }, () => []);
  const inDegree = Array.from({ length: numCourses }, () => 0);
  let queue = [];
  let res = [];

  // init adjList & inDegree
  for (let [crs, pre] of prerequisites) {
    inDegree[crs] += 1;
    adjList[pre].push(crs);
  }

  // init queue
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  while (queue.length > 0) {
    let dequeue = queue.shift();
    res.push(dequeue);

    for (let neighbor of adjList[dequeue]) {
      inDegree[neighbor] -= 1;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  return res.length === numCourses;
};

// console.log(canFinish(2, [[1, 0]]));
console.log(
  canFinish(5, [
    [1, 4],
    [2, 4],
    [3, 1],
    [3, 2],
  ])
);
