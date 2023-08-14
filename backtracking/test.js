var sumRootToLeaf = function(root) {
  const res = []

  const dfs = (node, temp) => {
    if (!node) {
      res.push([...temp])
      return;
    }

    temp.push(node.val)

    if (node.left) dfs(node.left, temp)
    if (node.right) dfs(node.right, temp)
  }

};

console.log('---', parseInt('11', 2))

const map = new Map()

map.set('gender', 'male')
map.set('name', 'viola')
let [first, second] = map.keys()

console.log(first, second, map.keys())

let arr1 = [1,2,3]
// let removed = arr1.splice(0, 1)
// arr1.splice(2, 0, removed)

let arr2 = [6,8]



// console.log([...arr1.slice(1), ...arr2])

const swap = (arr, idx1, idx2) => {
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
  return arr
}
const partition = (arr, left, right) => {
  let pivot = parseInt(arr[left])
  let s = left

  for (let i = left + 1; i <= right; i++) {
    if (parseInt(arr[i]) < pivot) {
      s += 1
      swap(arr, i, s)
    }
  }
  swap(arr, s, left)
  return s
}
// console.log('---par1', partition([50,25,92,16,76,30,43,54,19],0,8))

const arr3 = ["3","6","7","10"]
const arr4 = [3,6,7,10]
const arr5 = [5,6,2,9,3]

console.log('---', arr4.concat(99))


const obj1 = {name: 'viola'}
const obj2 = [{
  company: 'trend',
  info: {
    date: '1010',
    gender: 'male'
  }
}, [1,2,3]]

console.log('----', typeof null)



let s = 'abcd'



const getPossiblePartitions = (s) => {
  const res = []
  let count = 0

  const dfs = (idx, temp) => {
    if(idx === s.length) {
      res.push([...temp])
      count += 1
      return
    }

    for (let i = idx; i < s.length; i++) {
      temp.push(s.slice(idx, i + 1))
      dfs(i + 1, temp)
      temp.pop()
    }
  }

  dfs(0, [])
  console.log('--count', count)
  return res
}
//
// console.log('-getPossiblePartitions--', getPossiblePartitions('abcd'))
// console.log('abcd'.slice(0,1))
// console.log('---', "01".charCodeAt(1))

function test1(...args) {
  console.log('---call test1', args)
}

console.log('test1', test1(1,2,3))

let id = Symbol("id")
console.log('---id', id)