# Backtracking
####    Basics
*must*:
- Permutation (排列) `O(n!)`
  - > for loop recursive迭代所有項目，除了自己之外。
  - [ ] 1.[LeetCode 46. Permutations](https://leetcode.com/problems/permutations/) ``miedium``
  - [ ] 2.[LeetCode 47.  Permutations II](https://leetcode.com/problems/permutations-ii/) ``miedium``
    - key1: 每一個recursive loop是除了自己之外，做一個visited的訪問紀錄（array）+ temp
    - key2: 重複元素排列，相同元素在相同level只能迭代第一次，遇到以迭代過元素continue
- Combination (組合) `O(2^n)` or `O(n!)`
  - > for loop recursive只迭代自己後面的項目，因為跟順序無關，如果考慮前面就會有重複組合。
  - [ ] 1.[LeetCode 78. Subsets](https://leetcode.com/problems/subsets/description/) ``medium`` `O(2^n)`
  - [ ] 2.[LeetCode 77. Combinations](https://leetcode.com/problems/combinations/) ``medium`` `O(n!)`
  - [ ] 3.[LeetCode 131.  Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) ``miedium`` classic
- Conditional Combination (有條件的組合)
  1. [ ] [LeetCode 39. Combination Sum](https://leetcode.com/problems/combination-sum/description/) ``medium``
  2. [ ] [LeetCode 40. Combination Sum II](https://leetcode.com/problems/combination-sum-ii/) ``medium`` 
     - key:同level不重複出現之外，必須先排去確保後方元素一致
5. [LeetCode 491. Non-decreasing Subsequences](https://leetcode.com/problems/non-decreasing-subsequences/) ``medium``
- note:
  > sorting是為了可以剪枝 (pruning)，但是搜索問題一般複雜度較高，能剪枝就盡量剪枝。

#### Advanced
2. [LeetCode 79.  Word Search](https://leetcode.com/problems/word-search/) ``miedium`` classic, todo
2. [LeetCode 139.  Word Break](https://leetcode.com/problems/word-break/description/) ``miedium`` classic, todo
3. [LeetCode 90.  Subsets II](https://leetcode.com/problems/subsets-ii/) ``miedium``
5. [LeetCode 1079. Letter Tile Possibilities](https://leetcode.com/problems/letter-tile-possibilities/) ``miedium``

####    Non-intuitive
1. [LeetCode 17.  Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/) ``miedium``
2. [LeetCode 93.  Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/) ``miedium``
3. [LeetCode 494.  Target Sum](https://leetcode.com/problems/target-sum/description/) ``miedium``
4. [LeetCode 22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) ``miedium``
5. [LeetCode 526.  Beautiful Arrangement](https://leetcode.com/problems/beautiful-arrangement/) ``miedium``
6. [LeetCode 698.  Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/) ``miedium``
7. [LeetCode 36.  Valid Sudoku](https://leetcode.com/problems/valid-sudoku/) ``miedium``
8. [LeetCode 638.  Shopping Offers](https://leetcode.com/problems/shopping-offers/description/) ``miedium`` memo: kind of hard.. 生活化的題目
8. [LeetCode 784.  Letter Case Permutation](https://leetcode.com/problems/letter-case-permutation/description/) ``miedium`` 生活化, 簡單的變化

#### Hard
1. [LeetCode 37.  Sudoku Solver](https://leetcode.com/problems/sudoku-solver/) ``hard``
1. [LeetCode 51.  N-Queens](https://leetcode.com/problems/n-queens/) ``hard``
2. [LeetCode 212.  Word Search II](https://leetcode.com/problems/word-search-ii/) ``hard``
3. [LeetCode 871.  Minimum Number of Refueling Stops](https://leetcode.com/problems/minimum-number-of-refueling-stops/description/) ``hard``


####    Reference
- [回溯算法入门级详解 + 练习](https://leetcode.cn/problems/permutations/solution/hui-su-suan-fa-python-dai-ma-java-dai-ma-by-liweiw/)
- [Leetcode backtracking sorted by **Acceptance**](https://leetcode.com/tag/backtracking/)
- [排列組合 - 中山大學應數系lecture](http://www.math.nsysu.edu.tw/eprob/PerComb.htm)
