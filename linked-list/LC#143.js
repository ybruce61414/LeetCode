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
  let tempHead = head;

  //  finding middle node
  while (temp.next && temp.next.next) {
    temp = temp.next.next;
    half = half.next;
  }

  // adding one bit in case of lists with even length!!
  //here!!! need to figure out
  if (temp.next) half = half.next;

  // Now reverse the second half
  while (half) {
    temp = half.next;
    half.next = prev;
    prev = half;
    half = temp;
  }

  half = prev;

  // merge two linklist alternatively
  while (tempHead && half) {
    temp = tempHead.next;
    prev = half.next;

    tempHead.next = half;

    half.next = temp;

    tempHead = temp;
    half = prev;
  }

  if (tempHead && tempHead.next) {
    tempHead.next.next = null;
  }

  return head;
};
