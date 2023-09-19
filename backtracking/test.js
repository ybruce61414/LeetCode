

const array1 = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Alice' },
  { id: 3, name: 'Bob' },
];

// 示例数组2
const array2 = [
  { id: 2, name: 'Alice' },
  { id: 3, name: 'Bob' },
  { id: 4, name: 'Eve' },
];

// 找到交集的函数
function findIntersection(arr1, arr2) {
  return arr1.filter(obj1 => arr2.some(obj2 => obj2.id === obj1.id));
}

// 找到交集的结果
const intersection = findIntersection(array1, array2);

console.log(intersection);


class MyClass {
  // 静态方法
  static myStaticMethod() {
    return 'This is a static method.';
  }

  // 普通实例方法
  myInstanceMethod() {
    return 'This is an instance method.';
  }
}

// 调用静态方法，不需要创建类的实例
console.log(MyClass.myStaticMethod()); // 输出: "This is a static method."
// console.log(MyClass.myInstanceMethod());

// 创建类的实例
const myObject = new MyClass();

// 调用实例方法
console.log(myObject.myInstanceMethod())
// console.log(myObject.myStaticMethod())


const dec = (callback, num) => {
  return function(...args) {
    return callback.apply(this, [...args, num])
  }
}

const func1 = (...args) => {
  return args.reduce((acc, cur) => acc + cur)
}

const decEx1 = dec(func1, 3)

// console.log('---', decEx1(1,2,3))

const testObj = {
  name: 'ellen',
  gender: 'female',
  major: 'law',
}

for (let key in testObj) {
  console.log('--key-', key)
}

let permissions1 = { canView: true }
let permissions2 = { canEdit: true }
// copies all properties from permissions1 and permissions2 into user
Object.assign(testObj, permissions1, permissions2)

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}


const obj1 = { name: 'viola' }
const obj2 = { name: 'viola' }
const obj3 = obj1

// console.log('--', obj1 == obj3)


let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`)
    }
  },
  sleep() {
    this.isSleeping = true
  }
}

let rabbit = {
  name: "White Rabbit",
  __proto__: animal
}

// modifies rabbit.isSleeping
rabbit.sleep()

console.log('--', rabbit.isSleeping, rabbit)

function cat() {}
console.log('--', cat.__proto__)
console.log('---', typeof NaN)

const list1 = [1]
const list2 = [1]

console.log('--', list1 === list2)