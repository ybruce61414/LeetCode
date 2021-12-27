// 973. K Closest Points to Origin
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

class MaxBinaryHeap {
  constructor() {
    this.values = [];
    this.size = 0;
  }

  insert(val) {
    if (val === undefined) return;
    this.values.push(val);
    this.size += 1;

    this._bubbleUp();
    return this.values;
  }

  extractMax() {
    if (this.values.length === 0) return;
    this._swap(0, this.values.length - 1);

    let max = this.values.pop();
    this.size -= 1;

    this._trickleDown();
    return max;
  }

  _bubbleUp() {
    let currIdx = this.values.length - 1;
    let parentIx;

    while (currIdx > 0) {
      parentIx = Math.floor((currIdx - 1) / 2);
      if (this.values[parentIx].val > this.values[currIdx].val) break;
      this._swap(currIdx, parentIx);
      currIdx = parentIx;
    }
  }

  _trickleDown(start = 0) {
    let currIdx = start;
    let leftChildIdx, rightChildIdx, swapIdx;

    while (true) {
      leftChildIdx = currIdx * 2 + 1;
      rightChildIdx = currIdx * 2 + 2;
      swapIdx = null;

      if (
        leftChildIdx < this.size &&
        this.values[leftChildIdx].val > this.values[currIdx].val
      ) {
        swapIdx = leftChildIdx;
      }
      if (
        rightChildIdx < this.size &&
        ((swapIdx &&
          this.values[rightChildIdx].val > this.values[leftChildIdx].val) ||
          (!swapIdx &&
            this.values[rightChildIdx].val > this.values[currIdx].val))
      ) {
        swapIdx = rightChildIdx;
      }

      if (!swapIdx) break;
      this._swap(swapIdx, currIdx);
      currIdx = swapIdx;
    }
  }

  _swap(idx1, idx2) {
    [this.values[idx1], this.values[idx2]] = [
      this.values[idx2],
      this.values[idx1],
    ];
  }
}

var kClosest = function (points, k) {
  // using min heap
  let maxHeap = new MaxBinaryHeap();
  let res = [];

  for (let i = 0; i < points.length; i++) {
    let dist = Math.sqrt(points[i][0] ** 2 + points[i][1] ** 2);
    maxHeap.insert({ key: points[i], val: dist });
    if (maxHeap.values.length > k) maxHeap.extractMax();
  }

  for (let i = 0; i < k; i++) {
    res.push(maxHeap.extractMax().key);
  }

  return res;
};

var kClosestPartition = function (points, k) {
  // using partition (like quicksort)
  let res = [];

  return res;
};

console.log(
  kClosest(
    [
      [1, 3],
      [-2, 2],
    ],
    1
  )
);
// expected: [[-2,2]]

console.log(
  kClosest(
    [
      [3, 3],
      [5, -1],
      [-2, 4],
    ],
    2
  )
);
// expected: [[3,3],[-2,4]]

console.log(
  kClosest(
    [
      [2, 2],
      [2, 2],
      [3, 3],
      [2, -2],
      [1, 1],
    ],
    4
  )
);
// expected: [[1,1],[2,2],[2,2],[2,-2]]

console.log(
  kClosest(
    [
      [68, 97],
      [34, -84],
      [60, 100],
      [2, 31],
      [-27, -38],
      [-73, -74],
      [-55, -39],
      [62, 91],
      [62, 92],
      [-57, -67],
    ],
    5
  )
);
// expected:[[2,31],[-27,-38],[-55,-39],[-57,-67],[34,-84]]
