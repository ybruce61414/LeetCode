// 269. Alien Dictionary
const alienOrder = (words) => {
  const adjList = {};
  const inDegree = {};
  const queue = [];
  let res = "";

  //init
  for (let i = 0; i < words.length; i++) {
    for (let letter of words[i]) {
      if (!adjList[letter]) adjList[letter] = [];
      if (!inDegree[letter]) inDegree[letter] = 0;
    }
  }

  // build adjList & inDegree
  for (let i = 0; i < words.length - 1; i++) {
    const first = words[i];
    const second = words[i + 1];
    const len = Math.max(first.length, second.length);

    for (let j = 0; j < len; j++) {
      // invalid
      if (j > second.length - 1) return "";
      if (first[j] !== second[j]) {
        adjList[first[j]].push(second[j]);
        inDegree[second[j]] += 1;
        break;
      }
    }
  }

  //init queue
  for (let letter in inDegree) {
    if (inDegree[letter] === 0) queue.push(letter);
  }

  //kahn's algo
  while (queue.length > 0) {
    let dequeue = queue.shift();
    res += dequeue;

    for (let neighbor of adjList[dequeue]) {
      inDegree[neighbor] -= 1;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  return res.length === Object.keys(inDegree).length ? res : [];
};

console.log(alienOrder(["wrt", "wrf", "er", "ett", "rftt"]));
console.log(alienOrder(["z", "x"]));
console.log(alienOrder(["z", "x", "z"]));
