class MaxHeap {
  constructor() {
    this.values = [];
  }

  getParent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  getLeftChild(idx) {
    return idx * 2 + 1;
  }

  getRightChild(idx) {
    return idx * 2 + 2;
  }

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

  _bubbleUp() {
    let curIdx = this.values.length - 1;
    let parentIdx = this.getParent(curIdx);

    // while we haven't reached the root node and
    // the current element is greater than its parent node
    while (this.values[curIdx] > this.values[parentIdx] && curIdx > 0) {
      this.swap(curIdx, parentIdx);
      // move up the binary heap
      curIdx = parentIdx;
      parentIdx = this.getParent(curIdx);
    }
  }

  extract() {
    if (this.values.length === 0) return;
    this.swap(0, this.values.length - 1);
    let max = this.values.pop();
    this._trickleDown(0);
    return max;
  }

  _trickleDown(idx) {
    let leftChildIdx = this.getLeftChild(idx);
    let rightChildIdx = this.getRightChild(idx);
    let len = this.values.length;

    let swapIdx = idx;

    //left > cur
    if (
      leftChildIdx < len &&
      this.values[leftChildIdx] > this.values[swapIdx]
    ) {
      swapIdx = leftChildIdx;
    }

    if (
      rightChildIdx < len &&
      this.values[rightChildIdx] > this.values[swapIdx]
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

class MinHeap {
  constructor() {
    this.values = [];
  }

  getParent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  getLeftChild(idx) {
    return idx * 2 + 1;
  }

  getRightChild(idx) {
    return idx * 2 + 2;
  }

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

  extract() {
    if (this.values.length === 0) return;
    this.swap(0, this.values.length - 1);
    let max = this.values.pop();
    this._trickleDown(0);
    return max;
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

let mockHeap = new MinHeap();
const array = [2, 3, 5];

for (let ele of array) {
  mockHeap.insert(ele);
  // console.log("before", mockHeap.values);
  // if (mockHeap.values.length > 2) mockHeap.extract();
  // console.log("after", mockHeap.values);
}

mockHeap.extract();
console.log(mockHeap.show());

// for (let i = 0; i < array.length; i++) {
//   let max = mockHeap.extract();
//   console.log(max);
// }
