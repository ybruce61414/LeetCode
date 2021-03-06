// 347. Top K Frequent Elements
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function (nums, k) {
  // brute force
  const freqCounter = {};
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    let char = nums[i];
    freqCounter[char] = (freqCounter[char] || 0) + 1;
  }

  Object.keys(freqCounter).forEach((key) => {
    res.push({ key, val: freqCounter[key] });
  });

  res.sort((a, b) => b.val - a.val);

  return res.slice(0, k).map((item) => Number(item.key));
};

class MinHeap {
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

  extractMin() {
    if (this.values.length === 0) return;
    this._swap(0, this.values.length - 1);

    let min = this.values.pop();
    this.size -= 1;

    this._trickleDown();
    return min;
  }

  _bubbleUp() {
    let currIdx = this.values.length - 1;
    let parentIx;

    while (currIdx > 0) {
      parentIx = Math.floor((currIdx - 1) / 2);
      if (this.values[parentIx].val <= this.values[currIdx].val) break;
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
        this.values[leftChildIdx].val < this.values[currIdx].val
      ) {
        swapIdx = leftChildIdx;
      }
      if (
        rightChildIdx < this.size &&
        ((swapIdx &&
          this.values[rightChildIdx].val < this.values[leftChildIdx].val) ||
          (!swapIdx &&
            this.values[rightChildIdx].val < this.values[currIdx].val))
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

var topKFrequentHeap = function (nums, k) {
  const minHeap = new MinHeap();
  const freqCounter = {};
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    let char = nums[i];
    freqCounter[char] = (freqCounter[char] || 0) + 1;
  }

  let keys = Object.keys(freqCounter);

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    minHeap.insert({ key, val: freqCounter[key] });
    if (minHeap.values.length > k) {
      minHeap.extractMin();
    }
  }

  for (let i = 0; i < k; i++) {
    res.push(Number(minHeap.extractMin().key));
  }

  return res;
};

var topKFrequent3 = function (nums, k) {
  let map = new Map();
  let res = [];

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let [key, freq] of map.entries()) {
    res.push({ key, freq });
  }

  let target = res.length - k;
  let left = 0;
  let right = res.length - 1;

  while (true) {
    let idx = partition(res, "freq", left, right);
    if (idx === target) break;
    if (idx < target) {
      left = idx + 1;
    } else {
      right = idx - 1;
    }
  }
  console.log(res);

  return res.slice(target, res.length).map((obj) => obj.key);
};

const partition = (arr, prop, start, end) => {
  let pivot = arr[start][prop];
  let swapIdx = start;

  const swap = (idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = start + 1; i <= end; i++) {
    if (arr[i][prop] < pivot) {
      swapIdx += 1;
      swap(i, swapIdx);
    }
  }
  swap(start, swapIdx);
  return swapIdx;
};

console.log(topKFrequent3([1, 1, 1, 2, 2, 3], 2));
// expected: [1,2]
