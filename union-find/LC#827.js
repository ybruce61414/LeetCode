// 827. Making A Large Island

/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland0 = function(grid) {
  /*
  1. dfs and collect neighbors 0 in set
  2. for loop to find intersection set
  */
  const rowSize = grid.length;
  const colSize = grid[0].length;
  const islands = [];
  let tempArea = 0;
  let tempSet;

  const dfs = (row, col) => {
    if (
      row < 0 ||
      col < 0 ||
      row >= rowSize ||
      col >= colSize ||
      grid[row][col] === '*'
    ) return;

    if (grid[row][col] === 0) {
      const position = row * colSize + col;
      if (!tempSet) {
        tempSet = new Set([position]);
      } else {
        tempSet.add(position);
      }
      return;
    }

    grid[row][col] = '*';
    tempArea += 1;

    dfs(row - 1, col);
    dfs(row, col - 1);
    dfs(row + 1, col);
    dfs(row, col + 1);
  };

  for (let i = 0; i < rowSize; i++) {
    for (let j = 0; j < colSize; j++) {
      if (grid[i][j] === 1) {
        dfs(i ,j);
        islands.push([tempArea, tempSet]);
        tempSet = null;
        tempArea = 0;
      }
    }
  }

  let maxArea = 0;

  for (let i = 0; i < islands.length; i++) {
    const [targetArea, targetSet] = islands[i];
    if (!targetSet) return targetArea;

    let sumArea = targetArea;
    let intersections = []
    maxArea = Math.max(maxArea, sumArea);

    for (let j = i + 1; j < islands.length; j++) {
      const [itemArea, itemSet] = islands[j];

      const mainIntersection = getIntersection(targetSet, itemSet);

      if (mainIntersection.size !== 0) {
        for (const intersection of intersections) {
          const interSet = intersection[0];
          let tempSet = getIntersection(interSet, mainIntersection);

          if (tempSet.size !== 0) {
            maxArea = Math.max(maxArea, intersection[1] + itemArea);
            intersection[0] = tempSet;
            intersection[1] += itemArea;
          }
        }
        maxArea = Math.max(maxArea, targetArea + itemArea);
        intersections.push([mainIntersection, targetArea + itemArea])
      }

    }
  }

  return maxArea + 1;
};

const getIntersection = (set1, set2) => {
  return new Set([...set1].filter(x => set2.has(x)));
}


var largestIsland = function(grid) {
  const rowSize = grid.length;
  const colSize = grid[0].length;
  const islands = [];
  const gridMap = {};

  let tempArea = 0;

  const dfs = (row, col, tempObj) => {
    if (
      row < 0 ||
      col < 0 ||
      row >= rowSize ||
      col >= colSize ||
      grid[row][col] === '*'
    ) return;

    if (grid[row][col] === 0) {
      return;
    }

    gridMap[row * colSize + col] = tempObj;
    grid[row][col] = '*';
    tempArea += 1;

    dfs(row - 1, col, tempObj);
    dfs(row, col - 1, tempObj);
    dfs(row + 1, col, tempObj);
    dfs(row, col + 1, tempObj);
  };


  let id = 0;
  for (let i = 0; i < rowSize; i++) {
    for (let j = 0; j < colSize; j++) {
      if (grid[i][j] === 1) {
        const tempObj = {};
        dfs(i ,j, tempObj);
        tempObj['area'] = tempArea;
        tempObj['id'] = id;
        islands.push(tempArea);
        tempArea = 0;
        id += 1;
      }
    }
  }

  if (islands.length === 1) {
    return islands[0] === rowSize * colSize? islands[0]: islands[0] + 1;
  }

  const directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];

  let maxArea = 0;

  for (let i = 0; i < rowSize; i++) {
    for (let j = 0; j < colSize; j++) {
      if (grid[i][j] === 0) {
        const idSet = new Set();
        let tempArea = 0;

        for (const [dr,dc] of directions) {
          if (i + dr < 0 || i + dr >= rowSize || j + dc < 0 || j + dc >= colSize) continue;
          const position = (i + dr) * colSize + (j + dc);
          if (gridMap[position] === undefined) continue;

          const { area, id } = gridMap[position];
          if (!idSet.has(id)) {
            tempArea += area;
            idSet.add(id);
          }
        }

        maxArea = Math.max(maxArea, tempArea + 1);
      }
    }
  }

  return maxArea;
};


// 3
const grid1 = [[1,0],[0,1]];

// 4
const grid2 = [[1,1],[1,1]];

// 4
const grid3 = [[1,1],[1,0]];

// 1
const grid4 = [[0,0],[0,0]];

// 18
const grid5 = [
  [0,0,0,0,0,0,0],
  [0,1,1,1,1,0,0],
  [0,1,0,0,1,0,0],
  [1,0,1,0,1,0,0],
  [0,1,0,0,1,0,0],
  [0,1,0,0,1,0,0],
  [0,1,1,1,1,0,0]
];

// 24
const grid6 = [
  [0,1,0,0,1,0,0,0],
  [1,1,0,1,0,1,1,0],
  [1,1,1,0,0,1,1,1],
  [1,0,0,1,1,0,1,0],
  [0,0,1,1,1,1,0,1],
  [0,0,1,1,1,0,1,0],
  [0,0,1,0,1,0,0,0],
  [0,0,0,1,1,1,1,0]
]

// 15
const grid7 = [
  [1,0,1,0,1],
  [0,1,1,0,1],
  [1,1,1,0,0],
  [1,0,1,1,1],
  [0,0,1,1,0]
];

console.log('---res1:', largestIsland(grid1));
console.log('---res2:', largestIsland(grid2));
console.log('---res3:', largestIsland(grid3));
console.log('---res4:', largestIsland(grid4));

// 18
console.log('---res5:', largestIsland(grid5));

// 24
console.log('---res6:', largestIsland(grid6));

// 15
console.log('---res7:', largestIsland(grid7));



