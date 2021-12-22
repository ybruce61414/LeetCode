// 19. Remove Nth Node From End of List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let [prev, targetNode] = checkTrget(n, null, head);

  if (prev === null) {
    if (!targetNode) {
      return null;
    } else {
      head = targetNode.next;
    }
  } else {
    prev.next = targetNode.next;
  }

  targetNode.next = null;

  return head;

  function checkTrget(num, prev, head) {
    let node = head;

    while (true) {
      let tempNode = node;
      let next = 0;

      for (let j = 0; j < num; j++) {
        next = tempNode.next;
        tempNode = tempNode.next;
      }

      if (next === null) return [prev, node];
      prev = node;
      node = node.next;
    }
  }
};

var removeNthFromEnd2 = function (head, n) {
  let s = head;
  let f = head;

  for (let i = 0; i < n; i++) {
    f = f.next;
  }

  // delete first one
  if (f === null) return head.next;

  while (f.next) {
    f = f.next;
    s = s.next;
  }

  s.next = s.next.next;
  return head;
};
