// 143. Reorder List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let temp = head;
  let half = head;
  // prev is for reversed link list head
  let prev = null;

  //  finding middle node
  while (temp.next && temp.next.next) {
    temp = temp.next.next;
    half = half.next;
  }

  if (half.next) half = half.next;

  // Now reverse the second half
  while (half) {
    let temp = half.next;
    half.next = prev;
    prev = half;
    half = temp;
  }

  half = prev;

  // merge two linklist alternatively
  let tempHead = head;
  while (tempHead && half) {}
};
