class Heap {
  constructor(type) {
    this.values = [];
    this.type = type;
  }

  getParent(idx) { return Math.floor((idx - 1) / 2) }

  getLeftChild(idx) { return idx * 2 + 1 }

  getRightChild(idx) { return idx * 2 + 2 }

  swap(idx1, idx2) {
    let temp = this.values[idx1];
    this.values[idx1] = this.values[idx2];
    this.values[idx2] = temp;
  }

  peek() { return this.values[0] }

  show() { return this.values }

  insert(element) {
    this.values.push(element);
    this._bubbleUp();
  }

  extract() {
    if (this.values.length === 0) return;
    this.swap(0, this.values.length - 1);
    let extreme = this.values.pop();
    this._trickleDown(0);
    return extreme;
  }

  heapify(arr) {
    if (!Array.isArray(arr)) return -1;

    const lastParentIdx = this.getParent(arr.length - 1);
    this.values = [...arr];

    for (let i = lastParentIdx; i >= 0; i--) {
      this._trickleDown(i);
    }

    return this.values;
  }

  _bubbleUp() {
    let curIdx = this.values.length - 1;
    let parentIdx = this.getParent(curIdx);


    const getCondition = (idx, parentIdx) => {
      switch (this.type) {
        case 'min':
          return this.values[idx] < this.values[parentIdx];
        case 'max':
          return this.values[idx] > this.values[parentIdx];
        default:
          return false;
      }
    }
    // while we haven't reached the root node and
    // the current element is greater than its parent node
    while (getCondition(curIdx, parentIdx) && curIdx > 0) {
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

    const getCondition = (targetIdx, swapIdx) => {
      switch (this.type) {
        case 'min':
          return this.values[targetIdx] < this.values[swapIdx];
        case 'max':
          return this.values[targetIdx] > this.values[swapIdx];
        default:
          return false;
      }
    };

    //left > cur
    if (
      leftChildIdx < len &&
      getCondition(leftChildIdx, swapIdx)
    ) {
      swapIdx = leftChildIdx;
    }

    if (
      rightChildIdx < len &&
      getCondition(rightChildIdx, swapIdx)
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



const mockMinHeap = new Heap('min');
const mockMaxHeap = new Heap('max');

const arr = [4, 1, 5, 6, 3, 2, 7];

for (let item of arr) {
  mockMinHeap.insert(item);
  mockMaxHeap.insert(item);
}

console.log('--min insert:', mockMinHeap);
// 1 3 2 6 4 5 7

console.log('--max insert:', mockMaxHeap);
// 7 5 6 1 3 2 4

mockMinHeap.heapify(arr);
mockMaxHeap.heapify(arr);

console.log('--min heapify:', mockMinHeap);
// 1 3 2 6 4 5 7

console.log('--max heapify:', mockMaxHeap);
// 7 6 5 1 3 2 4