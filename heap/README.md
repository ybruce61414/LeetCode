# Binary Heap (Priority Queue) Note
####    What is a heap?
A heap is a **binary tree** with two properties:
1. **Order**: The value of a node must be >= (or <=) than the values of its children.
2. **Shape**: Must be a *complete binary tree* (every level except the last, is completely filled, and all nodes in the last level are as far left as possible).

####    Why heap?
It's the most efficient way to implement a **priority queue** (insert & delete``log(n)``).

####    How are these represented?
Use an **array** (0-indexed) and get index *i*:
> - 用sorted array是最簡單直接的方式來達到priority queue，但insertion是*O(n)*，每個element進來就排序;
> - 用array ＋ heap特性實作priority queue (array 變成partially sorted)，insertion是*O(log(n))*，每個element進來最多是比較樹高次數。
1. parent index: floor((*i* - 1) / 2)
2. left child index: *i* * 2 + 1
3. right child index: *i* * 2 + 2

####    Tricky part: why heapifying the array ``O(n)``?
> - 直覺會覺得是``O(nlog(n))``，每個點進來排``log(n)`` ，共n個點，錯的。
> - 想法：用percolate down，所有的leaf node就不用考慮，因為他下面沒有層了（直接省掉對node最多的level計算次數），然後一路往上層走，到最頂端root node，只有他需要做到``log(n)``，所以時間複雜度其實是比``O(nlog(n))``小的，答案是``O(n)``。

Proof: $$S = \sum_{i=0}^h 2^i(h - i)$$ $$S = h + 2(h - 1) + 4(h-2) + 8(h - 2)+...+2^h$$ $$2S-S = (2^{h+1} - 1)-(h-1) = n - h + 1$$ \
Note:  $$n = 2^{h+1} - 1$$
###  Usage
1.  Dijkastra's algorithm.
2.  Finding K'th largest / smallest element.


###  Operations
We need to adjust the locations of the nodes to fit the heap property, the process is called *heapifying*. \
Heapifying the element from *top to bottom* / *bottom to top* is called *percolate down* / *percolate up*.

0. Setup 
```js
class MaxHeap {
  constructor(type) {
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

  peek() { return this.values[0] }

  show() { return this.values }

  // methods need to implement as below
  insert(ele) {...}

  extract() {...}

  heapify(arr) {...}

  _bubbleUp() {...}

  _trickleDown(idx) {...}
}
```
<details>
    <summary>1.  Percolate (trickle) down</summary>

```js
// ...in class

// this method will put the idx to the correct posotion down to the leaf
_trickleDown(idx) {
  // O(logN): tree height down to the leaf, worst case
  let leftChildIdx = this.getLeftChild(idx);
  let rightChildIdx = this.getRightChild(idx);
  let len = this.values.length;

  // our purpose is to assign the max value's index to swapIdx
  let swapIdx = idx;

  //  check whether leftChildIdx exists in bound & left > cur
  if (
    leftChildIdx < len &&
    this.values[leftChildIdx] > this.values[swapIdx]
  ) {
    swapIdx = leftChildIdx;
  }

  //  check whether rightChildIdx exists in bound & 
  //  (right > cur or right > left)
  if (
    rightChildIdx < len &&
    this.values[rightChildIdx] > this.values[swapIdx]
  ) {
    swapIdx = rightChildIdx;
  }

  // if the largest index is not the parent index, need to swap
  if (swapIdx !== idx) {
    this.swap(idx, swapIdx);
    // recursively move down the heap
    this._trickleDown(swapIdx);
  }
}
```
</details>

<details>
    <summary>2.  Extract</summary>

```js
// ...in class

extract() {
  // O(logN): tree height
  if (this.values.length === 0) return;
  
  this.swap(0, this.values.length - 1);
  let max = this.values.pop();
  this._trickleDown(0);
  return max;
}
```
</details>

<details>
    <summary>3.  Percolate (bubble) up</summary>

```js
// ...in class

// this method will put the idx to the correct posotion up to the root
_bubbleUp() {
  // O(logN): tree height up to the root, worst case
  let curIdx = this.values.length - 1;
  let parentIdx = this.getParent(curIdx);

  // while we haven't reached the root node
  // we keep swap the cur and its' parent when
  // the cur is greater than its parent node
  while (this.values[curIdx] > this.values[parentIdx] && curIdx > 0) {
    this.swap(curIdx, parentIdx);
    // move up the binary heap
    curIdx = parentIdx;
    parentIdx = this.getParent(curIdx);
  }
}
```
</details>

<details>
    <summary>4.  Insert</summary>

```js
// ...in class

insert(ele) {
  // O(logN): tree height up to the root
  this.values.push(ele);
  this._bubbleUp();
}
```
</details>

<details>
    <summary>5.  Heapify</summary>

```js
// ...in class

heapify(arr) {
  // O(N): amazing
  if (!Array.isArray(arr)) return -1;

  const lastParentIdx = this.getParent(arr.length - 1);
  this.values = arr;

  // from last leaf's parent to the root node 
  for (let i = lastParentIdx; i >= 0; i--) {
    this._trickleDown(i);
  }

  return this.values;
}
```
</details>
