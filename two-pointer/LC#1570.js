// 1570. Dot Product of Two Sparse Vectors
class SparseVector {
  constructor(v1) {
    this.v1 = v1;
  }

  dotProduct(v2) {
    let res = 0;
    for (let i = 0; i < v2.length; i++) {
      res += this.v1[i] * v2[i];
    }
    return res;
  }
}

// Input: nums1 = [1,0,0,2,3], nums2 = [0,3,0,4,0]
// Output: 8

let v1 = new SparseVector([1, 0, 0, 2, 3]);
console.log(v1.dotProduct([0, 3, 0, 4, 0]));
