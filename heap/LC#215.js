// 215. Kth Largest Element in an Array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

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

var findKthLargest0 = function (nums, k) {
  // heap
  const minHeap = new MinHeap();

  for (let i = 0; i < nums.length; i++) {
    minHeap.insert(nums[i]);
    if (minHeap.values.length > k) {
      minHeap.extractMin();
    }
  }

  return minHeap.extractMin();
};

var findKthLargest = function (nums, k) {
  // quick select(partition)
  let target = nums.length - k;
  let left = 0;
  let right = nums.length - 1;

  while (true) {
    //kind of like a binary search
    let idx = partition(nums, left, right);
    if (idx === target) {
      return nums[idx];
    } else if (idx < target) {
      left = idx + 1;
    } else {
      right = idx - 1;
    }
  }
};

const partition = (arr, start, end) => {
  let pivot = arr[start];
  let swapIdx = start;

  const swap = (idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIdx += 1;
      swap(i, swapIdx);
    }
  }

  swap(start, swapIdx);

  return swapIdx;
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
// expected: 5

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
// expected: 4
