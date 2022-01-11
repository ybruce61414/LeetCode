// 230. Kth Smallest Element in a BST
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

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

  _bubbleUp() {
    let currIdx = this.values.length - 1;
    let parentIx;

    while (currIdx > 0) {
      parentIx = Math.floor((currIdx - 1) / 2);
      if (this.values[parentIx] >= this.values[currIdx]) break;
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
        this.values[leftChildIdx] > this.values[currIdx]
      ) {
        swapIdx = leftChildIdx;
      }
      if (
        rightChildIdx < this.size &&
        ((swapIdx && this.values[rightChildIdx] > this.values[leftChildIdx]) ||
          (!swapIdx && this.values[rightChildIdx] > this.values[currIdx]))
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

var kthSmallest = function (root, k) {
  const maxHeap = new MaxBinaryHeap();

  const preorder = (node) => {
    if (!node) return;

    maxHeap.insert(node.val);
    if (maxHeap.values.length > k) {
      maxHeap.extractMax();
    }
    preorder(node.left);
    preorder(node.right);
  };

  preorder(root);
  return maxHeap.peek();
};
//O(nlogk)

var kthSmallest1 = function (root, k) {
  //  inorder in bst is in order
  const res = [];

  const dfs = (node) => {
    if (!node) return;

    dfs(node.left);
    res.push(node.val);
    dfs(node.right);
  };

  dfs(root);
  return res[k - 1];
};
