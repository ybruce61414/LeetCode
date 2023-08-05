# Sorting
####    Comparison-based
 - Quadratic O(n^2)
   1. Bubble sort
   2. Selection sort
   3. Insertion sort
 - Linear logarithmic O(nlogn)
   1. **Merge sort**
   2. **Quick sort**
      - |                           | Merge sort                | Quick sort |
        |---------------------------|------------| -----|
        | Best case complexity        | O(nlogn)                  | O(nlogn)   |
        | Worst case complexity       | O(nlogn)                  | O(n^2)     |
        | Worst case space complexity | O(n)                      | O(1)       |

####    Linear
1. Counting sort
2. Bucket sort
3. Radix sort

####    Important tricks
1.  Merge 2 sorted array
    ```js
      const merge2SortedArray = (arr1, arr2) => {
         let res = []
         let p1 = 0
         let p2 = 0
      
         while (p1 < arr1.length && p2 < arr2.length) {
            if (arr1[p1] > arr2[p2]) {
               res.push(arr2[p2])
               p2 += 1
            } else {
               res.push(arr1[p1])
               p1 += 1
            }
         }
      
         if (p1 === arr1.length) {
            res = [...res, ...arr2.slice(p2)]
         } else {
            res = [...res, ...arr1.slice(p1)]
         }
         return res
      }
     ```
   2. Partition (quick-select)
       ```js
      const _swap = (arr, idx1, idx2) => {
        // inner util func
        let temp = arr[idx1]
        arr[idx1] = arr[idx2]
        arr[idx2] = temp
        return arr
      }
      
      const partition = (arr, left, right) => {
        let pivot = arr[left]
        let swapIdx = left
   
        for (let i = left + 1; i <= right; i++) {
          if (arr[i] < pivot) {
            swapIdx += 1
            _swap(arr, i, swapIdx)
          }
        }
        _swap(arr, swapIdx, left)
      
        return swapIdx
      }
      ```

##  Questions
   - Quick select 
     1. [LeetCode 215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) ``medium`` like: 14.7k, dislike: 714 (basic)
     2. [LeetCode 347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) ``medium`` like: 15.4k, dislike: 514 (good one)
   - Merge the sorted 
     1. [LeetCode 88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) ``easy`` like: 11.8k, dislike: 1.2 (basic)
     2. [LeetCode 21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) ``easy`` like: 19.4k, dislike: 1.8k (蠻難想到用recursive)
    

