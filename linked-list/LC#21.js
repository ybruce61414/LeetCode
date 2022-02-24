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
var mergeTwoLists0 = function (l1, l2) {
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

var mergeTwoLists = function (list1, list2) {
  let l1 = list1;
  let l2 = list2;
  let dummy = new ListNode(0);
  let prev = dummy;

  while (l1 || l2) {
    if (!l1) {
      prev.next = l2;
      break;
    } else if (!l2) {
      prev.next = l1;
      break;
    } else if (l1.val > l2.val) {
      let node = new ListNode(l2.val);
      prev.next = node;
      prev = node;
      l2 = l2.next;
    } else {
      let node = new ListNode(l1.val);
      prev.next = node;
      prev = node;
      l1 = l1.next;
    }
  }

  return dummy.next;
};

var mergeTwoLists = function (list1, list2) {
  //  recursive way
  const helper = (l1, l2) => {
    if (l1 === null) return l2;

    if (l2 === null) return l1;

    if (l1.val < l2.val) {
      l1.next = helper(l1.next, l2);
      return l1;
    } else {
      l2.next = helper(l1, l2.next);
      return l2;
    }
  };

  return helper(list1, list2);
};
