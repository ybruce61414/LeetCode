// 347. Top K Frequent Elements
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// class MinHeap {
//   constructor() {
//     this.values = [];
//     this.size = 0;
//   }
//
//   insert(val) {
//     if (val === undefined) return;
//     this.values.push(val);
//     this.size += 1;
//
//     this._bubbleUp();
//     return this.values;
//   }
//
//   extractMin() {
//     if (this.values.length === 0) return;
//     this._swap(0, this.values.length - 1);
//
//     let min = this.values.pop();
//     this.size -= 1;
//
//     this._trickleDown();
//     return min;
//   }
//
//   _bubbleUp() {
//     let currIdx = this.values.length - 1;
//     let parentIx;
//
//     while (currIdx > 0) {
//       parentIx = Math.floor((currIdx - 1) / 2);
//       if (this.values[parentIx].val <= this.values[currIdx].val) break;
//       this._swap(currIdx, parentIx);
//       currIdx = parentIx;
//     }
//   }
//
//   _trickleDown(start = 0) {
//     let currIdx = start;
//     let leftChildIdx, rightChildIdx, swapIdx;
//
//     while (true) {
//       leftChildIdx = currIdx * 2 + 1;
//       rightChildIdx = currIdx * 2 + 2;
//       swapIdx = null;
//
//       if (
//         leftChildIdx < this.size &&
//         this.values[leftChildIdx].val < this.values[currIdx].val
//       ) {
//         swapIdx = leftChildIdx;
//       }
//       if (
//         rightChildIdx < this.size &&
//         ((swapIdx &&
//           this.values[rightChildIdx].val < this.values[leftChildIdx].val) ||
//           (!swapIdx &&
//             this.values[rightChildIdx].val < this.values[currIdx].val))
//       ) {
//         swapIdx = rightChildIdx;
//       }
//
//       if (!swapIdx) break;
//       this._swap(swapIdx, currIdx);
//       currIdx = swapIdx;
//     }
//   }
//
//   _swap(idx1, idx2) {
//     [this.values[idx1], this.values[idx2]] = [
//       this.values[idx2],
//       this.values[idx1],
//     ];
//   }
// }

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
      if (this.values[parentIx] <= this.values[currIdx]) break;
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
        this.values[leftChildIdx] < this.values[currIdx]
      ) {
        swapIdx = leftChildIdx;
      }
      if (
        rightChildIdx < this.size &&
        ((swapIdx && this.values[rightChildIdx] < this.values[leftChildIdx]) ||
          (!swapIdx && this.values[rightChildIdx] < this.values[currIdx]))
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

var topKFrequent1 = function (nums, k) {
  const minHeap = new MinHeap();
  const freqCounter = {};
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    let char = nums[i];
    freqCounter[char] = (freqCounter[char] || 0) + 1;
  }

  let freq = Object.values(freqCounter);

  for (let i = 0; i < freq.length; i++) {
    minHeap.insert(freq[i]);
    if (minHeap.values.length > k) {
      minHeap.extractMin();
    }
  }

  console.log("--", minHeap.values);

  Object.keys(freqCounter).forEach((key) => {
    if (minHeap.values.includes(freqCounter[key])) res.push(Number(key));
  });

  return res;
};

console.log(topKFrequent1([1, 1, 1, 2, 2, 3], 2));
// expected: [1,2]

// console.log(topKFrequent1([1, 2], 2));
