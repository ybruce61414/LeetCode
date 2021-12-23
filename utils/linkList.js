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
e.next = f;
f.next = g;
g.next = h;
h.next = i;

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

// console.log(findMiddle(a));
console.log(reverse(a));
