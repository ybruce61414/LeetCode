// 61. Rotate List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight0 = function (head, k) {
  // brute force approach O(nk)
  let curHead = head;

  for (let i = 0; i < k; i++) {
    let cur = curHead;
    let prev = null;

    while (cur) {
      let next = cur.next;
      if (cur.next === null && prev) {
        prev.next = null;
        cur.next = curHead;
        curHead = cur;
      }
      prev = cur;
      cur = next;
    }
  }

  return curHead;
};

var rotateRight = function (head, k) {
  let len = 0;
  let cur = head;
  let prev = null;

  while (cur) {
    len += 1;
    prev = cur;
    cur = cur.next;
  }

  let shift = len - (k % len);
  let newHead = head;
  cur = head;

  for (let i = 1; i < shift; i++) {
    cur = cur.next;
  }

  if (cur !== prev) {
    newHead = cur.next;
    cur.next = null;
    prev.next = head;
  }

  return newHead;
};
