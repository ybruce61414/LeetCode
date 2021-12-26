// 109. Convert Sorted List to Binary Search Tree
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

// link list playground
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let a = new Node(-10);
let b = new Node(-3);
let c = new Node(0);
let d = new Node(5);
let e = new Node(9);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

var sortedListToBST = function (head) {
  let curr = head;
  let nodeArr = [];

  while (curr) {
    nodeArr.push(curr.val);
    curr = curr.next;
  }

  return genBST(nodeArr, 0, nodeArr.length - 1);
};

function genBST(arr, start, end) {
  if (start > end) return null;

  let mid = Math.floor((start + end) / 2);
  let root = new Node(arr[mid]);
  root.left = genBST(arr, start, mid - 1);
  root.right = genBST(arr, mid + 1, end);

  return root;
}

// let arr = [-10, -3, 0, 5, 9];
console.log(sortedListToBST(a));
// console.log(genBST(arr, 0, 4));
