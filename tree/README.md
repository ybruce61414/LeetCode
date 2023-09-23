# Tree
#### Main Concept
Tree traversal:
1. pre-order *VLR*
2. in-order *LVR* (binary search tree的inorder是有序排列)
3. post-order *LRV*
- note:
    - > V: visiting current node, L: left child, R: right child
- tricks: 
  - > 很多比較難的題目都是要去設計dfs 的 *return* 值。
####    Basics
*must*:
- 算tree height (dfs 要有return值，利用後序遍歷，重點是有左右子樹的post process)的衍生題:#543, #110
  - [ ] 1.[LeetCode 104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) ``easy``
  - [ ] 2.[LeetCode 543. Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) ``easy``
  - [ ] 3.[LeetCode 110. Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/) ``easy``
- 雙node arguments的dfs，左右比對，或合併
  - [ ] 1.[LeetCode 101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/) ``easy`` 難
  - [ ] 2.[LeetCode 100. Same Tree](https://leetcode.com/problems/same-tree/) ``easy``已經是util func
  - [ ] 3.[LeetCode 617. Merge Two Binary Trees](https://leetcode.com/problems/merge-two-binary-trees/) ``easy`` merge型的recursion pattern （難）
- Ancestor 祖先考題（很重要）
  - [ ] [LeetCode 235. Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) ``mdeium``
  - [ ] [LeetCode 236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) ``medium``
- BFS
  - [ ] [LeetCode 102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) ``easy``
- Combo skill
  - [ ] [LeetCode 572. Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/) ``easy``


Other
1. [LeetCode 111. Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/description/) ``easy``
2. [LeetCode 113. Path Sum ||](https://leetcode.com/problems/path-sum-ii/) ``medium``
3. [LeetCode 257. Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/) ``easy``
5. [LeetCode 404. Sum of Left Leaves](https://leetcode.com/problems/sum-of-left-leaves/) ``easy``
6. [LeetCode 530. Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/) ``easy``
7. [LeetCode 653. Two Sum IV - Input is a BST](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/) ``easy``
8. [LeetCode 226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) ``easy``


#### Advanced
1. [LeetCode 96. Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/) ``medium``
2. [LeetCode 98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) ``medium``
3. [LeetCode 103. Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) ``medium``
4. [LeetCode 109. Convert Sorted List to Binary Search Tree](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/description/) ``medium``
5. [LeetCode 199. Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) ``medium``
6. [LeetCode 230. Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) ``medium`` interesting




####    Reference
- [LeetCode tree](https://leetcode.com/tag/tree/)
- [Binary Tree: Traversal(尋訪)](http://alrightchiu.github.io/SecondRound/binary-tree-traversalxun-fang.html)
