# Sorting
####    Comparison-based
 - Quadratic O(n^2)
   1. Bubble sort
   > 1. 每一個pass能找出next large的元素（first pass找出最大值，sec pass找出第二大值）
   > 2. 總共的pass有（nums.length - 1）次
   > 3. 每一個pass會向右比較 （length - step - 1）次，每次比較後把大值swap到右邊
   > 4. swap 是expensive的操作，bubble sort會有過多的swap
   > 5. best case O(n)： 如果first pass沒有swap表示list原本就是sorted的
     2. Selection sort
   > 1. 針對每一個位置，找出該位置對應的元素。
   > 2. ex: 固定i = 0，scan from i + 1找出最小的元素後跟它swap。
   > 3. ex: 固定i = 1，scan from i + 1找出第二小的元素後跟它swap。
   > 4. best case O(n^2)
   3. Insertion sort
    > 1.  保持左邊為sorted array
    > 2.  迭代每個element，每個round把element放到對的position
    > 3.  比較左邊sorted array，所以起始idx = 1
    > 4. best case O(n)
 - Linear logarithmic O(nlogn)
   1. **Merge sort**
   2. **Quick sort**
   3. __Heap sort__
 - Topological sort (Topological ordering)
   - 把有相依性的nodes，做有效的排序
     

|                           | Merge sort                | Quick sort |
|---------------------------|------------|------------|
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
####    Quick select
   1. [LeetCode 215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) ``medium`` like: 14.7k, dislike: 714 (basic)
   2. [LeetCode 347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) ``medium`` like: 15.4k, dislike: 514 (good one)
#### Merge the sorted
   1. [LeetCode 88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) ``easy`` like: 11.8k, dislike: 1.2 (basic)
   2. [LeetCode 21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) ``easy`` like: 19.4k, dislike: 1.8k (蠻難想到用recursive)

#### Topological sort
  1. [LeetCode 207. Course Schedule](https://leetcode.com/problems/course-schedule/) ``medium`` like: 15k, dislike: 599
  2. [LeetCode 210. Course Schedule](https://leetcode.com/problems/course-schedule-ii/) ``medium`` like: 9.9k, dislike: 311
  3. [LeetCode 802. Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/) ``medium`` like: 9.9k, dislike: 311
  3. [LeetCode 2192. All Ancestors of a Node in a Directed Acyclic Graph](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/) ``medium`` like: 958, dislike: 13
  3. [LeetCode 1976. Number of Ways to Arrive at Destination](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/) ``medium`` like: 2.4k, dislike: 91
####    Reference
