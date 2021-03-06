// link list playground
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);
let f = new Node(6);
let g = new Node(7);
let h = new Node(8);
let i = new Node(9);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
// e.next = f;
// f.next = g;
// g.next = h;
// h.next = i;

function findMiddle(head) {
  // need to remember
  // finding the middle with the help of two pointer approach
  let temp = head;
  let half = head;

  while (temp.next && temp.next.next) {
    temp = temp.next.next;
    half = half.next;
  }

  return half;
}

function reverse(head) {
  let curr = head;
  let prev = null;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
}

var reorderList = function (head) {
  let temp = head;
  let half = head;
  // prev is for reversed link list head
  let prev = null;
  let tempHead = head;

  //  finding middle node
  while (temp.next && temp.next.next) {
    temp = temp.next.next;
    half = half.next;
  }

  // adding one bit in case of lists with even length!!
  //here!!! need to figure out
  if (temp.next) half = half.next;

  // Now reverse the second half
  while (half) {
    temp = half.next;
    half.next = prev;
    prev = half;
    half = temp;
  }

  half = prev;

  // merge two linklist alternatively
  while (tempHead && half) {
    temp = tempHead.next;
    prev = half.next;

    tempHead.next = half;
    half.next = temp;

    tempHead = temp;
    half = prev;
  }

  if (tempHead && tempHead.next) {
    tempHead.next.next = null;
  }

  return head;
};

// console.log(findMiddle(a));
// console.log(reverse(a));

console.log(reorderList(a));
