// 234. Palindrome Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome0 = function (head) {
  // turn into string first  time O(n) space O(n)
  let str = "";
  let cur = head;
  let left = 0;
  let right = 0;

  while (cur) {
    str += cur.val.toString();
    cur = cur.next;
  }

  right = str.length - 1;

  while (right > left) {
    if (str[right] !== str[left]) return false;
    right -= 1;
    left += 1;
  }

  return true;
};

var isPalindrome = function (head) {
  let middle = findMiddle(head);
  let right = reverseList(middle);
  let cur = head;

  while (right) {
    if (cur.val !== right.val) return false;
    cur = cur.next;
    right = right.next;
  }
  return true;
};

const findMiddle = (node) => {
  let dummy = new ListNode(-1);
  dummy.next = node;
  let slow = dummy;
  let fast = dummy;

  while (fast && fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow.next;
};

const reverseList = (node) => {
  let prev = null;
  let cur = node;

  while (cur) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }

  return prev;
};
