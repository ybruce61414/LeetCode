// 703. Kth Largest Element in a Stream
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

  peek() {
    return this.values[0];
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

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.max = k;
  this.heap = new MinHeap();
  this._initialize(k, nums);
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.heap.insert(val);
  if (this.heap.values.length > this.max) {
    this.heap.extractMin();
  }
  console.log("----", this.heap.values);
  return this.heap.peek();
};

KthLargest.prototype._initialize = function (k, nums) {
  for (let i = 0; i < nums.length; i++) {
    this.heap.insert(nums[i]);
    if (this.heap.values.length > k) {
      this.heap.extractMin();
    }
  }
  return this.heap;
};
/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

const kthLargest = new KthLargest(3, [4, 5, 8, 2]);

console.log(kthLargest.heap.values);
console.log(kthLargest.add(3));
console.log(kthLargest.add(5));
console.log(kthLargest.add(10));
console.log(kthLargest.add(9));
console.log(kthLargest.add(4));
