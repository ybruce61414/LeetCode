// 141. Linked List Cycle

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle0 = function (head) {
  // using hashMap
  const set = new Set();

  let cur = head;

  while (cur) {
    if (set.has(cur)) return true;
    set.add(cur);
    cur = cur.next;
  }

  return false;
};

var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};
