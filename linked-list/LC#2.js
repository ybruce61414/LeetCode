// 2. Add Two Numbers
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
var addTwoNumbers = function (l1, l2) {
  let prev = null;
  let newHead = null;
  let prevRem = 0;

  while (l1 || l2) {
    let sum = (l1?.val || 0) + (l2?.val || 0) + prevRem;
    let rem = sum % 10;
    let quo = Math.floor(sum / 10);

    let node = new ListNode(rem);

    if (!newHead) newHead = node;
    if (prev) prev.next = node;
    prev = node;
    prevRem = quo;

    l1 = l1?.next;
    l2 = l2?.next;
  }

  if (prevRem > 0) {
    prev.next = new ListNode(prevRem);
  }
  return newHead;
};

console.log(~~(3 / 5));
