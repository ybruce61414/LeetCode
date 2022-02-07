// 239. Sliding Window Maximum
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow0 = function (nums, k) {
  //brute force
  const res = [];

  for (let right = k - 1; right < nums.length; right++) {
    let left = right - k + 1;
    let max = -Infinity;

    for (let i = left; i <= right; i++) {
      if (nums[i] > max) max = nums[i];
    }

    res.push(max);
  }

  return res;
};

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

  peek() {
    //  see the max one without modified it
    return this.values[0];
  }

  _bubbleUp() {
    let currIdx = this.values.length - 1;
    let parentIx;

    while (currIdx > 0) {
      parentIx = Math.floor((currIdx - 1) / 2);
      if (this.values[parentIx].val >= this.values[currIdx].val) break;
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

var maxSlidingWindow1 = function (nums, k) {
  const pq = new MaxBinaryHeap();
  const res = [];

  // init pq
  for (let i = 0; i < k - 1; i++) {
    pq.insert({ order: i, val: nums[i] });
  }

  for (let right = k - 1; right < nums.length; right++) {
    pq.insert({ order: right, val: nums[right] });

    let max = pq.peek();

    while (true) {
      if (max.order <= right && max.order >= right - k + 1) {
        res.push(max.val);
        break;
      } else {
        pq.extractMax();
        max = pq.peek();
      }
    }
  }

  return res;
};

class MonotonicQueue {
  //decreasing order
  constructor() {
    this.queue = [];
  }

  push(item) {
    while (
      this.queue.length !== 0 &&
      this.queue[this.queue.length - 1] < item
    ) {
      this.queue.pop();
    }
    this.queue.push(item);
  }

  getMax() {
    return this.queue[0];
  }

  remove(item) {
    if (item === this.queue[0]) {
      return this.queue.shift();
    }
  }
}

var maxSlidingWindow = function (nums, k) {
  const mq = new MonotonicQueue();
  const res = [];

  for (let i = 0; i < k - 1; i++) {
    mq.push(nums[i]);
  }

  for (let i = k - 1; i < nums.length; i++) {
    mq.push(nums[i]);
    res.push(mq.getMax());
    mq.remove(nums[i - k + 1]);
  }

  return res;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// console.log(maxSlidingWindow([1], 1));
// console.log(maxSlidingWindow([1, -1], 1));
