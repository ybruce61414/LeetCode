// 225. Implement Stack using Queues

var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  if (this.q1.length !== 0) {
    this.q1.push(x);
  } else {
    this.q2.push(x);
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (this.q1.length === 0 && this.q2.length === 0) return null;
  let target = this.q1.length === 0 ? this.q2 : this.q1;
  let temp = this.q1.length === 0 ? this.q1 : this.q2;

  while (target.length > 0) {
    let add = target.shift();
    if (target.length === 0) return add;
    temp.push(add);
  }
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  let target = this.q1.length === 0 ? this.q2 : this.q1;
  return target[target.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q1.length === 0 && this.q2.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
