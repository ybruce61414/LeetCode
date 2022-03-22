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

function threeNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => a - b);
  let res = [];

  const getSum = (arr) => {
    return arr.reduce((prev, cur) => prev + cur, 0);
  };

  const dfs = (idx, temp) => {
    if (temp.length === 3) {
      if (getSum(temp) === targetSum) {
        res.push([...temp]);
      }
      return;
    }

    for (let i = idx; i < array.length; i++) {
      temp.push(array[i]);
      dfs(i + 1, temp);
      temp.pop();
    }
  };

  dfs(0, []);
  return res;
}

// console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = 0;
  let minDiff = Infinity;
  let res = [];

  while (p1 < arrayOne.length && p2 < arrayTwo.length) {
    let ele1 = arrayOne[p1];
    let ele2 = arrayTwo[p2];
    if (Math.abs(ele1 - ele2) < minDiff) {
      minDiff = Math.abs(ele1 - ele2);
      res = [ele1, ele2];
    }

    if (ele1 > ele2) {
      p2 += 1;
    } else {
      p1 += 1;
    }
  }
  return res;
}

function moveElementToEnd(array, toMove) {
  // Write your code here.
  let firstMove = -1;

  for (let i = 0; i < array.length; i++) {
    let cur = array[i];
    if (cur !== toMove && firstMove !== -1) {
      // swap
      array[i] = array[firstMove];
      array[firstMove] = cur;
      firstMove += 1;
    }

    if (cur === toMove && firstMove === -1) {
      firstMove = i;
    }
  }

  return array;
}

function isMonotonic(array) {
  // Write your code here.
  if (array.length === 0 || array.length === 1) return true;
  let stack = [array[0]];
  let dir = null;

  for (let i = 1; i < array.length; i++) {
    let top = stack[stack.length - 1];
    let cur = array[i];

    console.log(dir, cur);

    // decreasing
    if (top > cur) {
      if (dir === null) {
        dir = -1;
      } else {
        if ((top - cur) * dir > 0) return false;
      }

      // increasing
    } else if (top < cur) {
      if (dir === null) {
        dir = 1;
      } else {
        if ((top - cur) * dir > 0) return false;
      }
    }
    stack.push(cur);
  }
  return true;
}

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
  redShirtSpeeds.sort((a, b) => a - b);
  if (fastest) {
    blueShirtSpeeds.sort((a, b) => b - a);
  } else {
    blueShirtSpeeds.sort((a, b) => a - b);
  }

  let res = 0;

  for (let i = 0; i < redShirtSpeeds.length; i++) {
    res += Math.max(blueShirtSpeeds[i], redShirtSpeeds[i]);
  }
  return res;
}

function spiralTraverse(array) {
  // Write your code here.
  let m = array.length;
  let n = array[0].length;
  let res = [];
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const dfs = (row, col, dir) => {
    let nrow = row + directions[dir % 4][0];
    let ncol = col + directions[dir % 4][1];
    let ndir = dir;

    if (res.length === m * n) return;

    if (
      nrow < 0 ||
      ncol < 0 ||
      nrow >= m ||
      ncol >= n ||
      array[nrow][ncol] === "*"
    ) {
      ndir += 1;
    }

    res.push(array[row][col]);
    array[row][col] = "*";

    if (ndir !== dir) {
      nrow = row + directions[ndir % 4][0];
      ncol = col + directions[ndir % 4][1];
    }

    dfs(nrow, ncol, ndir);
  };

  dfs(0, 0, 0);
  return res;
}

// console.log(
//   spiralTraverse([
//     [1, 2, 3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10, 9, 8, 7],
//   ])
// );

function getNthFib(n) {
  // Write your code here.
  let dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

// console.log(getNthFib(6));

function productSum(array) {
  // Write your code here.

  const dfs = (arr, w) => {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        res += (w + 1) * dfs(arr[i], w + 1);
      } else {
        res += arr[i];
      }
    }
    return res;
  };

  return dfs(array, 1);
}

// console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));
// console.log(productSum([1, [2]]));
// console.log(productSum([1, 2]));

function longestPeak(array) {
  // Write your code here.
  let len = array.length;
  let left = new Array(len);
  let right = new Array(len);
  left[0] = 0;
  right[len - 1] = 0;

  for (let i = 1; i < len; i++) {
    if (array[i] > array[i - 1]) {
      left[i] = 1 + left[i - 1];
    } else {
      left[i] = 0;
    }
  }

  for (let j = len - 2; j >= 0; j--) {
    if (array[j] > array[j + 1]) {
      right[j] = right[j + 1] + 1;
    } else {
      right[j] = 0;
    }
  }

  console.log(left, right);

  let max = 0;
  for (let i = 1; i <= len; i++) {
    if (left[i] > 0 && right[i] > 0) {
      max = Math.max(max, left[i] + right[i] + 1);
    }
  }

  return max;
}

// console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]));

function arrayOfProducts(array) {
  // Write your code here.
  let left = new Array(array.length);
  let right = new Array(array.length);
  left[0] = 1;
  left[1] = array[0];
  right[array.length - 1] = 1;
  right[array.length - 2] = array[array.length - 1];

  for (let i = 2; i < array.length; i++) {
    left[i] = array[i - 1] * left[i - 1];
  }
  for (let i = array.length - 3; i >= 0; i--) {
    right[i] = array[i + 1] * right[i + 1];
  }

  let res = [];
  for (let i = 0; i < array.length; i++) {
    res.push(left[i] * right[i]);
  }
  return res;
}

// console.log(arrayOfProducts([5, 1, 4, 2]));

function findThreeLargestNumbers(array) {
  // Write your code here.
  let res = new Array(3);

  const update = (cur) => {
    if (res[2] !== undefined && cur > res[2]) {
      res.shift();
      res.splice(2, 0, cur);
    } else if (res[1] !== undefined && cur > res[1]) {
      res.shift();
      res.splice(1, 0, cur);
    } else if (res[0] !== undefined && cur > res[0]) {
      res.shift();
      res.splice(0, 0, cur);
    } else {
      let pt = res.length - 1;
      while (res[pt] !== undefined) pt -= 1;
      if (pt >= 0) res[pt] = cur;
    }
  };

  for (let ele of array) update(ele);
  return res;
}

// console.log(
//   findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
// );

function insertionSort(array) {
  // Write your code here.
  const swap = (idx1, idx2) => {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
  };

  for (let i = 0; i < array.length; i++) {
    let cur = array[i];
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] > cur) swap(j, j + 1);
    }
  }
  return array;
}
// console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]));

function mergeOverlappingIntervals(array) {
  // Write your code here.
  array.sort((a, b) => a[0] - b[0]);
  let res = [];
  let pt = 1;
  let start = array[0][0];
  let end = array[0][1];

  while (pt < array.length) {
    let [curStart, curEnd] = array[pt];

    if (curStart > end) {
      res.push([start, end]);
      start = curStart;
      end = curEnd;
    } else {
      //update end
      end = curEnd > end ? curEnd : end;
    }
    pt += 1;
  }

  res.push([start, end]);

  return res;
}

console.log(
  mergeOverlappingIntervals([
    [1, 22],
    [-20, 30],
  ])
);
