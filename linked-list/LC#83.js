// 83. Remove Duplicates from Sorted List
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
var deleteDuplicates = function (head) {
  if (!head) return null;

  let pointer = head.next;
  let node = head;

  while (pointer) {
    if (node.val !== pointer.val) {
      node.next = pointer;
      //  update node
      node = pointer;
    }
    pointer = pointer.next;
  }

  node.next = null;
  return head;
};
