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

var findKthLargest = function (nums, k) {
  const minHeap = new MinHeap();

  for (let i = 0; i < nums.length; i++) {
    minHeap.insert(nums[i]);
    if (minHeap.values.length > k) {
      minHeap.extractMin();
    }
  }

  return minHeap.extractMin();
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
// expected: 5

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
// expected: 4
