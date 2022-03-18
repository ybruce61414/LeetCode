// 876. Middle of the Linked List
var middleNode = function (head) {
  let count = 0;
  let middle;
  let curr = head;

  while (curr) {
    count += 1;
    curr = curr.next;
  }

  if (count % 2 === 0) {
    middle = count / 2 + 1;
  } else {
    middle = (count + 1) / 2;
  }
  curr = head;
  for (let i = 1; i < middle; i++) {
    curr = curr.next;
  }

  return curr;
};

var middleNode = function (head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;

  while (fast && fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow.next;
};
