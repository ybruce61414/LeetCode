var getIntersectionNode = function (headA, headB) {
  let visited = new Set();
  let curr = headA;

  while (curr) {
    visited.add(curr);
    curr = curr.next;
  }

  curr = headB;
  while (curr) {
    if (visited.has(curr)) {
      return curr;
    }
    curr = curr.next;
  }
  return null;
};
