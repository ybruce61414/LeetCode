// 210. Course Schedule II
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
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

  return res.length !== numCourses ? [] : res;
};
