// find the pivot index of rotated sorted array
const findRotatedPivot = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (right > left) {
    let mid = Math.floor((left + right) / 2);
    // compare to right
    // if (arr[right] < arr[mid]) {
    //   left = mid + 1;
    // } else {
    //   right = mid;
    // }

    // compare to left
    if (arr[left] <= arr[mid]) {
      left = left + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

console.log(findRotatedPivot([4, 5, 6, 7, 0, 1, 2]));
console.log(findRotatedPivot([0, 1, 2]));
