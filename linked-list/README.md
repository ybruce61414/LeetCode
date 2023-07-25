# Linked List
####    What is Linked List?
A linear dynamic data structure. The number of nodes in a list is not fixed
and can grow and shrink on demand. Each node is made up of 2 items: the data and the reference of the next node.

####    Why Linked List?


|                    | Array | Linked list |
|--------------------|-------|-------------|
| Searching          | O(1)  | O(n)        |
| Insertion/Deletion | O(n)  | O(1)        |


Note: 
  - Array has complex position-based insertion:
    -  to add more element to array when full, we must create a new array and 
copy the old one into the new one, this is expensive O(n).
  - why constant time for accessing array elements?
    - array is stored in a continuous sequential memory locations.

#### Types
1. Singly linked list
2. Doubly linked list
3. Circular linked list

###  Operations
- Traversing the list
- Inserting an item in the list
- Deleting an item from the list
***

##  Questions
####    Basics
*must*:
- Traversing 
  - always using 2 pointer (cur, pev)
  - [ ] 1.[LeetCode 206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/description/) ``easy`` like: 18.5k, dislike: 342
  - [ ] 2.[LeetCode 876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/) ``easy`` like: 9.9k, dislike: 289
  - [ ] 3.[LeetCode 141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) ``easy`` like: 12.9k, dislike: 1.1k
- Deleting 
  - head node有可能消失 -> dummy node
  - [ ] 4.[LeetCode 203. Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/) ``easy`` like: 7.5k, dislike: 211
  - [ ] 5.[LeetCode 83. Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/) ``easy`` like: 7.6k, dislike: 254
  - [ ] 6.[LeetCode 19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) ``medium`` like: 16.5k, dislike: 683




#### Advanced
1. [LeetCode 21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/description/) ``easy`` like: 19.1k, dislike: 1.8k
2. [LeetCode 82. Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/) ``medium`` like: 7.9k, dislike: 254, (very interesting!)
3. [LeetCode 86. Partition List](https://leetcode.com/problems/partition-list/description/) ``medium`` like: 5.6k, dislike: 641 (dummy node精髓)
4. [LeetCode 61. Rotate List](https://leetcode.com/problems/rotate-list/) ``medium`` like: 8.2k, dislike: 1.4k
5. [LeetCode 143. Reorder List](https://leetcode.com/problems/reorder-list/) ``medium`` like: 9.2k, dislike: 304 (有點難)
6. [LeetCode 138. Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) ``medium`` like: 11.6k, dislike: 1.2k
     - good example for creating new node
     - reference: [great explanation](https://leetcode.cn/problems/copy-list-with-random-pointer/solution/liang-chong-shi-xian-tu-jie-138-fu-zhi-dai-sui-ji-/)
7. [LeetCode 146. LRU Cache](https://leetcode.com/problems/lru-cache/) ``medium`` like: 18.7k, dislike: 832 (classic)

#### Hard
1. [LeetCode 23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) ``hard`` like: 17.7k, dislike: 636





####    Reference
- [reference leetcode tag](https://leetcode.com/tag/linked-list/)
- [neetcode.io](https://neetcode.io/practice)