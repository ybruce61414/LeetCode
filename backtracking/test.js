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
arr5.sort((a, b) => a - b)
console.log('--',partition(arr3, 0, 3), arr3)
console.log('--arr5',arr5)
