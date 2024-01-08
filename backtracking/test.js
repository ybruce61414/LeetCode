//
//
// const array1 = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Alice' },
//   { id: 3, name: 'Bob' },
// ];
//
// // 示例数组2
// const array2 = [
//   { id: 2, name: 'Alice' },
//   { id: 3, name: 'Bob' },
//   { id: 4, name: 'Eve' },
// ];
//
// // 找到交集的函数
// function findIntersection(arr1, arr2) {
//   return arr1.filter(obj1 => arr2.some(obj2 => obj2.id === obj1.id));
// }
//
// // 找到交集的结果
// const intersection = findIntersection(array1, array2);
//
//
//
// class MyClass {
//   // 静态方法
//   static myStaticMethod() {
//     return 'This is a static method.';
//   }
//
//   // 普通实例方法
//   myInstanceMethod() {
//     return 'This is an instance method.';
//   }
// }
//
// // 调用静态方法，不需要创建类的实例
// console.log(MyClass.myStaticMethod()); // 输出: "This is a static method."
// // console.log(MyClass.myInstanceMethod());
//
// // 创建类的实例
// const myObject = new MyClass();
//
// // 调用实例方法
// console.log(myObject.myInstanceMethod())
// // console.log(myObject.myStaticMethod())
//
//
// const dec = (callback, num) => {
//   return function(...args) {
//     return callback.apply(this, [...args, num])
//   }
// }
//
// const func1 = (...args) => {
//   return args.reduce((acc, cur) => acc + cur)
// }
//
// const decEx1 = dec(func1, 3)
//
// // console.log('---', decEx1(1,2,3))
//
// const testObj = {
//   name: 'ellen',
//   gender: 'female',
//   major: 'law',
// }
//
// for (let key in testObj) {
//   console.log('--key-', key)
// }
//
// let permissions1 = { canView: true }
// let permissions2 = { canEdit: true }
// // copies all properties from permissions1 and permissions2 into user
// Object.assign(testObj, permissions1, permissions2)
//
// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }
//
//
// const obj1 = { name: 'viola' }
// const obj2 = { name: 'viola' }
// const obj3 = obj1
//
// // console.log('--', obj1 == obj3)
//
//
// let animal = {
//   walk() {
//     if (!this.isSleeping) {
//       alert(`I walk`)
//     }
//   },
//   sleep() {
//     this.isSleeping = true
//   }
// }
//
// let rabbit = {
//   name: "White Rabbit",
//   __proto__: animal
// }
//
// // modifies rabbit.isSleeping
// rabbit.sleep()
//
// console.log('--', rabbit.isSleeping, rabbit)
//
// function cat() {}
// console.log('--', cat.__proto__)
// console.log('---', typeof NaN)
//
// const list1 = [1]
// const list2 = [1]
//
// console.log('--', list1 === list2)
//
// const str1 = 'abcde'
// const arr10 = ['w', 'e', 'r']
// console.log('---',arr10.join(''))
//
// const isPalindrome = str => {
//   let left = 0
//   let right = str.length - 1
//
//   while (left < right) {
//     if (str[left] !== str[right]) return false
//     left += 1
//     right -= 1
//   }
//   return true
// }
//
//
// const map1 = {
//   id: '123',
//   name: 'viola'
// }
//
//
// const arr3 = [1,2,3]
// const str7 = '?assetype=2'
//
// var evalRPN = function(tokens) {
//   const signsSet = new Set(["+", "-", "*", "/"])
//   const stack = []
//
//   for (let token of tokens) {
//     if (signsSet.has(token)) {
//       const last1 = Number(stack.pop())
//       const last2 = Number(stack.pop())
//       console.log('--l1 l2', last1, last2)
//       let res = 0
//       switch (token) {
//         case '-':
//           res = last2 - last1
//           break
//         case '*':
//           res = last1 * last2
//           break
//         case '/':
//           res = last2 / last1
//           break
//         case '+':
//         default:
//           res = last1 + last2
//           break
//       }
//       stack.push(res)
//     } else {
//       stack.push(token)
//     }
//   }
//   return stack[0]
// };
//
// const preCal = expression => {
//   // return str.split(' ')
//   const signsSet = new Set(["+", "-", "*", "/"])
//   const tokens = expression.split(' ').reverse();
//   const stack = []
//
//   for (let token of tokens) {
//     if (signsSet.has(token)) {
//       const last1 = Number(stack.pop())
//       const last2 = Number(stack.pop())
//       let res = 0
//       switch (token) {
//         case '-':
//           res = last1 - last2
//           break
//         case '*':
//           res = last1 * last2
//           break
//         case '/':
//           res = last1 / last2
//           break
//         case '+':
//         default:
//           res = last1 + last2
//           break
//       }
//       stack.push(res)
//     } else {
//       stack.push(token)
//     }
//   }
//   return stack[0]
// }
//
// // console.log('---', preCal("- 3 * 4 5"))
// // console.log('---', preCal("0"))
// // console.log('---', preCal("+ 3 4"))
// // console.log('---', preCal("* + 3 4 5"))
// // console.log('---', preCal("/ - 3 4 + 5 2"))
//
// var canCompleteCircuit = function(gas, cost) {
//   // for (let start = 0; start < gas.length; start++) {
//   //   let vol = 0
//   //
//   //   for (let j = start; j < start + gas.length; j++) {
//   //     const pos = j % gas.length
//   //     vol = vol + gas[pos] - cost[pos]
//   //     if (vol < 0) break
//   //   }
//   //   console.log('yoyo--', vol)
//   //   if (vol >= 0) return start
//   // }
//   // return -1
//   let spare = 0;
//   let minSpare = Infinity;
//   let minIdx = null;
//
//   for (let i = 0; i < gas.length; i++) {
//     spare += gas[i] - cost[i];
//     console.log('--temp', spare, minSpare)
//     if (spare < minSpare) {
//       minSpare = spare;
//       minIdx = i;
//     }
//   }
//
//   console.log('-spare', spare)
//   if (spare < 0) {
//     return -1;
//   } else {
//     return (minIdx + 1) % (gas.length);
//   }
// };
//
// // console.log('---ans', canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]))
// // console.log('---ans', canCompleteCircuit([2,3,4], [3,4,3]))
//
// class TrieNode {
//   constructor() {
//     this.children = new Array(26)
//     this.isEnd = false
//   }
// }
//
// class Trie {
//   constructor() {
//     this.root = new TrieNode()
//   }
//
//   insert(word) {
//     let node = this.root
//     console.log('---node', node)
//     for (let char of word) {
//       const charCodeAt = char.charCodeAt(0) - 'a'.charCodeAt(0)
//       console.log('---charCodeAt', char, charCodeAt, node)
//       if (node.children[charCodeAt] === undefined) {
//         node.children[charCodeAt] = new TrieNode()
//       }
//       node = node.children[charCodeAt]
//     }
//     node.isEnd = true
//   }
//
//   search(word) {
//     let node = this.root
//     for (let char of word) {
//       const charCodeAt = char.charCodeAt(0) - 'a'.charCodeAt(0)
//       if (node.children[charCodeAt] === undefined) return false
//       node = node.children[charCodeAt]
//     }
//
//     return node.isEnd
//   }
// }
//
// var findWords = function(board, words) {
//   const m = board.length
//   const n = board[0].length
//   const trie = new Trie()
//
//   for (let word of words) {
//     trie.insert(word)
//   }
//   return trie
// };
//
// // console.log('---', findWords([["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],["oath","pea","eat","rain"]))

const flatten = nested => {
  let res = []
  for (let item of nested) {
    if (Array.isArray(item)) {
      res = [...res, ...flatten(item)]
    } else {
      res.push(item)
    }
  }
  // console.log('--res', res)
  return res
}

// console.log('--', flatten([[1,1],2,[1,1]]))

const arr5 = [1,2,[8,9]]
const str5 = 'apple'
// console.log('---', str5[0])
for (let char of str5) {
  console.log(char)
}

// const arr6 = [1,2,3,4,5]
// const str6 = 'apple banana'
// console.log('--1', str6.split(''))
// console.log('--2', arr6.join('-'))
// console.log('--3', str6.slice(0, 2))

// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     console.log('---ij',i, j)
//     if (i === 2 && j === 0) break
//   }
// }

const ss = undefined
const ss1 = null
console.log('--', typeof ss1)

function flattenArr(value) {
  if (typeof value !== 'object' || value === null) {
    return value
  }
  if (Array.isArray(value)) {
    let res = []
    for (let item of value) {
      res = res.concat(flattenArr(item))
    }
    return res
  }
}



// console.log('---res', flattenArr([1,2,[5,6,[7],8]]))
// console.log('---res', flattenArr([1,2,[5,6]]))

const target = { a: 1, b: 2 }
const source = { b: 4, c: 5 }

const returnedTarget = Object.assign(target, source)
// console.log('--returnedTarget', returnedTarget)

const s = '((())))'

let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // (*)

// console.log('---1', rabbit.__proto__)
// console.log('---2', Object.prototype, Object.__proto__)


const shape = {
  radius: 10,
  diameter: function () {
    return this.radius
  },
  diameter2: () => { return this?.radius }

}

// console.log('---4', shape.diameter())
// console.log('---5', shape.diameter2())

// console.log('--')

let user = {
  firstName: "John",
  sayHi() {
    return (`Hello, ${this.firstName}!`);
  }
};



console.log('--', user.sayHi())

// let worker = {
//   someMethod() {
//     return 1;
//   },
//
//   slow(x) {
//     // scary CPU-heavy task here
//     console.log("Called with " + x, this);
//     return x * this?.someMethod(); // (*)
//   }
// };
// worker.slow(2);
//
// let func = worker.slow;
// func(2);

function work(a, b) {
  return ( a + b ); // work is an arbitrary function or method
}

let worker2 = {
  someMethod() {
    return 1;
  },

  slow(a, b) {
    // scary CPU-heavy task here
    return (a + b + 5);
  }
};

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args)
    console.log('--tt', this)
    return func.apply(this, args)
  }

  wrapper.calls = []
  return wrapper
}

// work = spy(work);
let worker3 = spy(worker2.slow);
worker2.slow = spy(worker2.slow);

// work(1, 2); // 3
// work(4, 5); // 9

worker2.slow(1, 2); // 3
worker2.slow(4, 5); // 9

worker3(1, 2); // 3
worker3(4, 5); // 9

function _shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];

    console.log('---j',i, j)
  }
  return arr;
}

console.log('--_shuffle', _shuffle([1,2,3,4,5,6,7]))

