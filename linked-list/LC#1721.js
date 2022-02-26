// 1721. Swapping Nodes in a Linked List
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
var swapNodes0 = function (head, k) {
  //naive solution
  let len = 0;
  let cur = head;

  while (cur) {
    len += 1;
    cur = cur.next;
  }
  let first = 0;
  let second = 0;
  let node1 = head;
  let node2 = head;
  if (len === k) return head;
  if (len % 2 === 1 && k === (len + 1) / 2) return head;

  if (k > len / 2) {
    first = len - k + 1;
    second = k;
  } else {
    first = k;
    second = len - k + 1;
  }

  for (let i = 1; i < first; i++) {
    node1 = node1.next;
  }
  for (let j = 1; j < second; j++) {
    node2 = node2.next;
  }

  let temp = node1.val;
  node1.val = node2.val;
  node2.val = temp;

  return head;
};

var swapNodes = function (head, k) {
  let first = head;
  let second = head;
  let cur = head;

  let count = 0;

  while (cur) {
    count += 1;
    if (count <= k) {
      first = cur;
    } else {
      second = second.next;
    }
    cur = cur.next;
  }

  let temp = first.val;
  first.val = second.val;
  second.val = temp;

  return head;
};
