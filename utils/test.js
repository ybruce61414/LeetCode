function tournamentWinner(competitions, results) {
  // Write your code here.
  let map = new Map();
  let len = competitions.length;
  let winner = "";

  for (let i = 0; i < len; i++) {
    let [home, away] = competitions[i];
    let hscore = results[i] === 1 ? 3 : 0;
    let ascore = results[i] === 0 ? 3 : 0;
    map.set(home, (map.get(home) || 0) + hscore);
    map.set(away, (map.get(away) || 0) + ascore);

    let greater = map.get(home) > map.get(away) ? home : away;

    if ((map.get(winner) || 0) < map.get(greater)) winner = greater;
  }

  return winner;
}

// const competitions = [
//   ["HTML", "C#"],
//   ["C#", "Python"],
//   ["Python", "HTML"],
// ];
//
// const results = [0, 0, 1];
//
// console.log(tournamentWinner(competitions, results));

function nonConstructibleChange(coins) {
  // Write your code here.
  if (coins.length === 0) return 1;
  if (coins.length === 1) return coins[0] > 1 ? 1 : 2;
  let res = [];

  const dfs = (temp, idx) => {
    res.push(getSum(temp));

    for (let i = idx; i < coins.length; i++) {
      temp.push(coins[i]);
      dfs(temp, i + 1);
      temp.pop();
    }
  };

  dfs([], 0);
  res.sort((a, b) => a - b);

  for (let i = 1; i < res.length; i++) {
    if (res[i] === res[i + 1]) continue;
    if (i === res.length - 1) return res[res.length - 1] + 1;
    if (res[i] + 1 !== res[i + 1]) return res[i] + 1;
  }
  return res;
}

const getSum = (arr) => {
  return arr.reduce((prev, cur) => prev + cur, 0);
};

// console.log(nonConstructibleChange([1]));

function findClosestValueInBst(tree, target) {
  // Write your code here.
  let ans = Infinity;

  const dfs = (node) => {
    if (!node) return;

    if (Math.abs(node.value - target) < Math.abs(ans)) {
      ans = node.value;
    }

    dfs(node.left);
    dfs(node.right);
  };

  dfs(tree);

  return ans;
}
const tree = {
  tree: {
    nodes: [
      { id: "10", left: "5", right: "15", value: 10 },
      { id: "15", left: "13", right: "22", value: 15 },
      { id: "22", left: null, right: null, value: 22 },
      { id: "13", left: null, right: "14", value: 13 },
      { id: "14", left: null, right: null, value: 14 },
      { id: "5", left: "2", right: "5-2", value: 5 },
      { id: "5-2", left: null, right: null, value: 5 },
      { id: "2", left: "1", right: null, value: 2 },
      { id: "1", left: null, right: null, value: 1 },
    ],
    root: "10",
  },
  target: 12,
};
