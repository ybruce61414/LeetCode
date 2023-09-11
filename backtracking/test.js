

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
console.log(myObject.myStaticMethod())