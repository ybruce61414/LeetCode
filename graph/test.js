const twoColorable = (edges) => {
  // Write your code here.
  const colors = {};
  const visited = {};
  let res = true;

  for (let i = 0; i < edges.length; i++) colors[i] = 0;

  const dfs = (node, parent, color) => {

    visited[node] = true;
    colors[node] = color;
    let neighborColor = colors[node] === 1? 2: 1;
    console.log('ready:', node, parent)

    for (let neighbor of edges[node]) {
      if (!visited[neighbor]) {
        console.log('--next--', neighbor, node, neighborColor)
        dfs(neighbor, node, neighborColor);
      } else {
        console.log('--!!',neighbor, parent, colors)
        if (neighbor !== parent && color === colors[neighbor]) {
          console.log('--!!111')
          res = res && false;
        }
      }
    }

  };

  for (let i = 0; i < edges.length; i++) {

    for (let node of edges[i]) {
      if (node === i) return false;
    }

    if (!visited[i]) dfs(i, -1, 1);
  }


  return res;
}


const detectArbitrage = (exchangeRates) => {
  // Write your code here.
  const adjList = {};

  for (let i = 0; i < exchangeRates.length; i++) adjList[i] = [];

  for (let i = 0; i < exchangeRates.length; i++) {
    for (let j = 0; j < exchangeRates[0].length; j++) {
      if (j !== i) adjList[i].push([j, exchangeRates[i][j]]);
    }
  }

  let res = false;

  console.log('--adjList-', adjList)

  for (let [node, neighbors] of Object.entries(adjList)) {
    for (let neighbor of neighbors) {
      const neighborBack = adjList[neighbor[0]].find(item => {
        return parseInt(item[0]) === parseInt(node)
      });

      if (neighbor[1] * neighborBack[1] > 1) {
        res = true;
        break;
      }
    }
    if (res) break;
  }

  return res;
}

// console.log('--detectArbitrage-', detectArbitrage([
//   [1, 0.8631, 0.5903],
//   [1.1586, 1, 0.6849],
//   [1.6939, 1.46, 1]
// ]));


const semordnilap = (words) => {
  // Write your code here.
  const reverseSet = new Set();
  const res = [];

  for (let word of words) {
    const reverseWord = reverse(word);
    if (reverseSet.has(reverseWord)) {
      res.push([word, reverseWord]);
    } else {
      reverseSet.add(word);
    }
  }

  return res;
}

const reverse = str => {
  let copy = str.split('');
  let left = 0;
  let right = str.length - 1;


  while (left < right) {
    let temp = copy[left];
    copy[left] = copy[right];
    copy[right] = temp;

    left += 1;
    right -= 1;
  }
  return copy.join('');
};


console.log('---0', semordnilap([
  'diaper',
  'abc',
  'test',
  'cba',
  'repaid',
]))

console.log('---1', semordnilap([
  'god',
  'dog'
]))


const str2 = 'abc';

str2[0] = 'z';
console.log('--str2-', str2)