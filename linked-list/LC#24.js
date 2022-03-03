// 24. Swap Nodes in Pairs
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
var swapPairs1 = function (head) {
  //  modifying the values in the list's nodes
  if (!head || !head.next) return head;

  let prev = head;
  let curr = head.next;

  while (prev && curr) {
    let temp = curr.val;
    curr.val = prev.val;
    prev.val = temp;

    prev = curr.next;
    curr = curr.next?.next;
  }

  return head;
};

var swapPairs2 = function (head) {
  //  only nodes themselves may be changed.
  //  my solution
  if (!head || !head.next) return head;

  let pprev = null;
  let prev = head;
  let curr = head.next;
  let temHead = head.next;

  while (prev && curr) {
    let next = curr.next;
    curr.next = prev;
    prev.next = next;
    if (pprev) pprev.next = curr;

    pprev = prev;
    prev = next;
    curr = next?.next;
  }

  return temHead;
};

var swapPairs3 = function (head) {
  //  only nodes themselves may be changed.
  if (!head || !head.next) return head;

  let dummy = new ListNode(0);
  let curr = head;
  let prev = dummy;
  let nextKeep;

  while (curr && curr.next) {
    nextKeep = curr.next.next;
    curr.next.next = curr;
    prev.next = curr.next;
    curr.next = nextKeep;

    prev = curr;
    curr = nextKeep;
  }

  return dummy.next;
};

//final version
var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let dummy = new ListNode(-1);
  dummy.next = head;
  let cur = dummy;

  while (cur.next && cur.next.next) {
    let n1 = cur.next;
    let n2 = cur.next.next;
    cur.next = n2;
    n1.next = n2.next;
    n2.next = n1;
    cur = n1;
  }
  return dummy.next;
};
