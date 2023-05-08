const arr1 = [5,8,3,7,0,3,6]

console.log(arr1.sort((a, b) =>a - b))
// console.log('---', arr1.splice(0, 2))


const func1 = () => {

}



const swap = (arr, idx1, idx2) => {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

const quickSelect = (arr, left, right) => {
  let pivot = arr[left];
  let s = left;

  for (let i = left + 1; i <= right; i++) {
    if (arr[i] < pivot) {
      s += 1;
      swap(arr, i, s)
    }
  }
  return s;
}

console.log('--quickSelect', quickSelect([3,2,1,5,6,4],0,5))

const test1 = [1,2,3,4,5]
console.log('----', Math.min(...test1))