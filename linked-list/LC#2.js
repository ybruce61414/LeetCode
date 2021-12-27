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
  let plus = Infinity;
  let head;
  let prev;
  let ll1 = l1;
  let ll2 = l2;

  while (ll1 || ll2 || plus > 0) {
    let sum =
      (ll1?.val || 0) + (ll2?.val || 0) + (plus === Infinity ? 0 : plus);

    plus = ~~(sum / 10);

    if (!ll1 && !ll2) {
      prev.next = new ListNode(sum);
    }

    if (ll1) {
      prev = ll1;
      ll1.val = sum % 10;
      ll1 = ll1.next;
      head = l1;
    }

    if (ll2) {
      prev = ll2;
      ll2.val = sum % 10;
      ll2 = ll2.next;
      head = l2;
    }
  }
  return head;
};

console.log(~~(3 / 5));
