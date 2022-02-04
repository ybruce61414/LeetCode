// 269. Alien Dictionary
const alienOrder = (words) => {
  const adjList = {};
  const inDegree = {};

  for (let i = 0; i < words.length - 1; i++) {
    for (let letter of words[i]) {
      if (!adjList[letter]) adjList[letter] = [];
      if (!inDegree[letter]) inDegree[letter] = 0;
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    const first = words[i];
    const second = words[i + 1];
    const len = Math.max(first.length, second.length);

    // build adjList
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

  return inDegree;
};

console.log(alienOrder(["wrt", "wrf", "er", "ett", "rftt"]));
