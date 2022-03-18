// 23. Merge k Sorted Lists
var mergeKLists = function (lists) {
  // nlog(k)
  if (lists.length === 0) return null;
  else if (lists.length === 1 && !lists[0]) return null;

  const merge = (left, right) => {
    if (left === right) return lists[left];
    let mid = Math.floor((left + right) / 2);
    return merge2sorted(merge(left, mid), merge(mid + 1, right));
  };
  return merge(0, lists.length - 1);
};

const merge2sorted = (n1, n2) => {
  if (!n1) return n2;
  if (!n2) return n1;

  if (n1.val > n2.val) {
    n2.next = merge2sorted(n1, n2.next);
    return n2;
  } else {
    n1.next = merge2sorted(n1.next, n2);
    return n1;
  }
};

var mergeKLists0 = function (lists) {
  if (lists.length === 0) {
    return null;
  } else if (lists.length === 1 && !lists[0]) {
    return null;
  } else {
    let init = lists[0];
    for (let i = 1; i < lists.length; i++) {
      init = merge(init, lists[i]);
    }
    return init;
  }
};

const merge = (n1, n2) => {
  if (!n1) return n2;
  if (!n2) return n1;

  if (n1.val > n2.val) {
    n2.next = merge(n1, n2.next);
    return n2;
  } else {
    n1.next = merge(n1.next, n2);
    return n1;
  }
};
