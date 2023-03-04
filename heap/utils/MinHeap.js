// non optimal version
class MinHeap {
  constructor() {
    this.values = [];
  }

  getParent(idx) { return Math.floor((idx - 1) / 2) }

  getLeftChild(idx) { return idx * 2 + 1 }

  getRightChild(idx) { return idx * 2 + 2 }

  swap(idx1, idx2) {
    let temp = this.values[idx1];
    this.values[idx1] = this.values[idx2];
    this.values[idx2] = temp;
  }

  peek() {
    return this.values[0];
  }

  show() {
    return this.values;
  }

  insert(element) {
    this.values.push(element);
    this._bubbleUp();
  }

  extract() {
    if (this.values.length === 0) return;
    this.swap(0, this.values.length - 1);
    let max = this.values.pop();
    this._trickleDown(0);
    return max;
  }

  heapify(arr) {
    if (!Array.isArray(arr)) return -1;

    const lastParentIdx = this.getParent(arr.length - 1);
    this.values = arr;

    for (let i = lastParentIdx; i >= 0; i--) {
      this._trickleDown(i);
    }

    return this.values;
  }

  _bubbleUp() {
    let curIdx = this.values.length - 1;
    let parentIdx = this.getParent(curIdx);

    // while we haven't reached the root node and
    // the current element is greater than its parent node
    while (this.values[curIdx] < this.values[parentIdx] && curIdx > 0) {
      this.swap(curIdx, parentIdx);
      // move up the binary heap
      curIdx = parentIdx;
      parentIdx = this.getParent(curIdx);
    }
  }

  _trickleDown(idx) {
    let leftChildIdx = this.getLeftChild(idx);
    let rightChildIdx = this.getRightChild(idx);
    let len = this.values.length;

    // not leaf node
    let swapIdx = idx;

    //left > cur
    if (
      leftChildIdx < len &&
      this.values[leftChildIdx] < this.values[swapIdx]
    ) {
      swapIdx = leftChildIdx;
    }

    if (
      rightChildIdx < len &&
      this.values[rightChildIdx] < this.values[swapIdx]
    ) {
      swapIdx = rightChildIdx;
    }

    // if the largest index is not the parent index
    if (swapIdx !== idx) {
      this.swap(idx, swapIdx);
      // recursively move down the heap
      this._trickleDown(swapIdx);
    }
  }
}

const mockHeap = new MinHeap();
const arr = [4, 1, 5, 6, 3, 2, 7];

for (let item of arr) mockHeap.insert(item);

console.log('--min insert:', mockHeap);
// 1 3 2 6 4 5 7

mockHeap.heapify(arr);
console.log('--min heapify:', mockHeap);
// 1 3 2 6 4 5 7