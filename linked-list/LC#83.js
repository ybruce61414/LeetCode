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
var deleteDuplicates0 = function (head) {
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

var deleteDuplicates1 = function (head) {
  let curr = head;
  let dummy = new ListNode(-Infinity);
  let prev = dummy;

  while (curr) {
    let next = curr.next;
    if (prev.val !== curr.val) {
      prev.next = curr;
      prev.next.next = null;
      prev = curr;
    }
    curr = next;
  }

  return dummy.next;
};

var deleteDuplicates2 = function (head) {
  //brilliant one
  let curr = head;

  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
};
