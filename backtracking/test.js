function decorator(func) {
  return function() {
    console.log('---yo args', this)
    // return func.apply(this, arguments)
    return func(...arguments)
  }
}

const adder = function(a, b) {
  return a + b
}

let employee = {
  someMethod() {
    return 50
  },
  slow(x) {
    console.log('-call slow method', x, this)
    return x + (this?.someMethod() || 0)
  }
};

const adderDec = decorator(adder)
let outerFunc0 = employee.slow
let outerFunc1 = employee.slow.bind(employee)
let outerFunc2 = decorator(employee.slow)

// employee.slow = decorator(employee.slow)

// console.log('---test0:', adderDec(99, 100))
// console.log('---test1:', employee.slow(1))
// console.log('---test2:', employee.slow(2))
// console.log('---outerFunc0:', outerFunc0(3))
// console.log('---outerFunc1:', outerFunc1(3))
console.log('---outerFunc2:', outerFunc2.bind(employee)(3))

function flatten(arr) {
  let res = []

  for (let item of arr) {
    if (!Array.isArray(item)) {
      res.push(item)
    } else {
      res = [...res, ...flatten(item)]
    }
  }
  return res
}

// console.log('--flatten1', flatten([[1,1], 2, [5,[7],6]]))


export default function deepEqual(valueA, valueB) {
  if (typeof valueA !== typeof valueB) {
    console.log('1')
    return false
  } else if (Array.isArray(valueA) && Array.isArray(valueB)) {
    console.log('2')
    if (valueA.length !== valueB.length) return false

    for (let i = 0; i < valueA.length; i++) {
      if (!deepEqual(valueA[i], valueB[i])) return false
    }
    return true
  } else if (typeof valueA === 'object' && typeof valueB === 'object') {
    console.log('3')
    if (valueA === null && valueB === null) return true
    if (valueA === null || valueB === null) return false
    console.log('32')
    if (Object.keys(valueA).length !== Object.keys(valueB).length) return false
    console.log('33')

    for (let key in valueA) {
      if (!deepEqual(valueA[key], valueB[key])) return false
    }
    return true
  }
  return valueA === valueB
}

// console.log('--deepEqual', deepEqual({ foo: 'bar' }, { foo: 'bar' }))
// console.log('--deepEqual',Object.prototype.toString.call([1,5,7]))

const nullO = Object.create(null)
console.log('--1',  Object.getPrototypeOf({}))
console.log('--2',   Array.prototype)




class EventEmitter {
  constructor() {
    this.eventMap = new Map()
  }

  /**
   * @param {string} eventName
   * @param {Function} listener
   * @returns {{off: Function}}
   */
  on(eventName, listener) {
    if (!this.eventMap.has(eventName)) {
      this.eventMap.set(eventName, [])
    }
    const copy = (...args) => listener(...args)
    const listenerObj = {
      eventName,
      originMap:this.eventMap,
      originListener: copy,

      off() {
        // console.log('---off!', this.originMap.get(this.eventName))
        const newRes = this.originMap
          .get(this.eventName)
          .filter(listener => listener.originListener !== this.originListener)

        this.originMap.set(this.eventName, newRes)
      }
    }
    this.eventMap.get(eventName).push(listenerObj)
    return listenerObj
  }

  /**
   * @param {string} eventName
   * @param {...any} args
   * @returns boolean
   */
  emit(eventName, ...args) {
    if (!this.eventMap.has(eventName)) return false

    const listeners = this.eventMap.get(eventName)
    if (listeners.length === 0) return false

    for (let listener of listeners) {
      listener.originListener.apply(this, args)
    }
    return true
  }
}



const emitter = new EventEmitter();

let num = 1;
function square() {
  num *= 2;
}

const sub1 = emitter.on('square', square);
emitter.emit('square');
// 2
console.log('-num1', num)

const sub2 = emitter.on('square', square);
emitter.emit('square');
// 8
console.log('-num2', num)

sub1.off();
emitter.emit('square');
// 16
console.log('-num3', num)

sub2.off();
emitter.emit('square');
// 16
console.log('-num4', num)

console.log('---', 'apple'.split(''))
console.log('---', ['a', 'c', 'd'].join(''))