// 147. Insertion Sort List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    let j = i - 1;

    while (j >= 0 && cur < arr[j]) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = cur;
  }

  return arr;
};

const arr1 = [-1, 5, 3, 4, 0];
console.log(insertionSort(arr1));

var insertionSortList0 = function (head) {
  // naive way
  let cur = head;
  let pt = head;

  while (cur) {
    let curVal = cur.val;
    while (pt !== cur) {
      if (pt.val > curVal) break;
      pt = pt.next;
    }
    if (pt !== cur) {
      let originP = pt.val;
      pt.val = cur.val;
      pt = pt.next;
      while (pt !== cur) {
        let origin = pt.val;
        pt.val = originP;
        originP = origin;
        pt = pt.next;
      }
      cur.val = originP;
    }
    pt = head;
    cur = cur.next;
  }
  return head;
};

var insertionSortList = function (head) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let cur = head;
  let target = null;

  while (cur && cur.next) {
    if (cur.val <= cur.next.val) {
      cur = cur.next;
    } else {
      let prev = dummy;
      target = cur.next;
      cur.next = cur.next.next;

      while (prev.next.val <= target.val) {
        prev = prev.next;
      }

      target.next = prev.next;
      prev.next = target;
    }
  }

  return dummy.next;
};
