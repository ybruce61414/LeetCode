const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > cur) {
      arr[j + 1] = arr[j];
      j -= 1;
    }

    if (j !== i - 1) arr[j + 1] = cur;
  }
  return arr;
};

// [1,2,9,76,20]  20


// bad method
const insertionSort202304 = arr => {
  const size = arr.length;

  for (let i = 0; i < size; i++) {
    let temp = arr[i];
    let tempIdx = i - 1

    for (let j = i - 1; j >=0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
        tempIdx = j
      } else {
        arr[j+ 1] = temp;
        break;
      }
    }

    if (tempIdx === 0) arr[tempIdx] = temp
  }
  return arr;
}

// const arr1 = [2, 5, 8, 3, 9, 4, 1];
// const arr21 = [3, -9, -12, -1, 8];
const arr22 = [3, -9, -12, -1, 8];
// const arr3 = [20, 20, 31, 56, 1, 12, 12];
// const arr41 = [5, 4];
const arr42 = [5, 4];
// console.log(insertionSort(arr21));
// console.log(insertionSort(arr41));
console.log(insertionSort202304(arr22));
console.log(insertionSort202304(arr42));



//  2/18
const sorted1 = [2,4,90]
const sorted2 = [1,5,100]
const arr5 = [5,3,8,6,2,7,1,4]
const merge2sorted = (arr1, arr2) => {
  let p1 = 0
  let p2 = 0
  let res = []

  while(p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      res.push(arr1[p1])
      p1 += 1
    } else {
      res.push(arr2[p2])
      p2 += 1
    }
  }

  if (p1 < arr1.length) res = res.concat(arr1.slice(p1))
  if (p2 < arr2.length) res = res.concat(arr2.slice(p2))
  return res
}

const mergeSort = arr => {
  if (arr.length === 1) return arr
  const half = Math.floor(arr.length / 2)
  const left = arr.splice(half)

  return merge2sorted(mergeSort(left), mergeSort(arr))
}
console.log('-m', mergeSort(arr5))


let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit")
// rabbit.__proto__ = animal;
// rabbit.prototype = animal;

console.log('--rabbit', Rabbit.prototype, rabbit.prototype, rabbit.__proto__)

const ob = {
  'a': 1,
  'b': 4
}

console.log('--', Object.entries(ob))