// 92. Reverse Linked List II
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let pointer = head;
  let count = 1;
  let prev = null;
  let before = null;
  let after = null;
  let rf;
  let re;

  if (!head.next) return head;

  while (pointer) {
    if (count === left - 1 && left - 1 > 0) before = pointer;
    if (count === right + 1 && right + 1 > 0) after = pointer;

    if (count === left) {
      console.log("---left", pointer);
      re = pointer;
      prev = pointer;
      pointer = pointer.next;
      console.log("---leftprev", prev);
    } else if (count > left && count <= right) {
      if (count === right) rf = pointer;
      console.log("-1---", count, pointer, prev);
      let next = pointer.next;
      pointer.next = prev;
      prev = pointer;
      pointer = next;
    } else {
      pointer = pointer.next;
    }
    count += 1;
  }

  if (before) before.next = rf;
  if (after) re.next = after;

  return !before ? prev : head;
};
