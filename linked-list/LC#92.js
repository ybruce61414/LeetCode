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
  let dummy = new ListNode(-1);
  dummy.next = head;

  //  find m-1 th node
  let before = dummy;
  for (let i = 0; i < left - 1; i++) {
    before = before.next;
  }

  let prev = before;
  let curr = before.next;
  let tail = curr;

  // reverse
  for (let i = left; i <= right; i++) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  //  relink
  before.next = prev;
  tail.next = curr;

  return dummy.next;
};
