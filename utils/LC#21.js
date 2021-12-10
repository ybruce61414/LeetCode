//21. Merge Two Sorted Lists (linked list)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let curr1 = l1;
  let curr2 = l2;
  let resultPointer = null;
  let head = null;

  if (!curr1 || !curr2) return curr1 || curr2;

  while (curr1 && curr2) {
    if (curr1.val >= curr2.val) {
      if (!resultPointer) {
        resultPointer = curr2;
        head = curr2;
      } else {
        resultPointer.next = curr2;
        resultPointer = resultPointer.next;
      }
      curr2 = curr2.next;
    } else {
      if (!resultPointer) {
        resultPointer = curr1;
        head = curr1;
      } else {
        resultPointer.next = curr1;
        resultPointer = resultPointer.next;
      }
      curr1 = curr1.next;
    }
  }

  if (curr1) resultPointer.next = curr1;
  if (curr2) resultPointer.next = curr2;

  return head;
};
