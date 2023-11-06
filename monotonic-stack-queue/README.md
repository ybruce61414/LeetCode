# Stack
#### Main Concept
[template for monotonic stack](https://leetcode.com/discuss/study-guide/2347639/A-comprehensive-guide-and-template-for-monotonic-stack-based-problems) 
##  Questions
####    Basics
*must*:
1. stack:
- [ ] 1.[LeetCode 20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) ``easy`` like: 22.2k, dislike: 1.5k
- [ ] 2.[LeetCode 150. Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) ``easy`` like: 6.6k, dislike: 960
2. mono-stack:
- [ ] 1.[LeetCode 155. Min Stack](https://leetcode.com/problems/min-stack/description/) ``medium`` like: 13k, dislike: 793
  - key: 要有一個輔助棧去紀錄min值 (mono stack)
  - reference: https://leetcode.cn/problems/min-stack/solutions/9036/min-stack-fu-zhu-stackfa-by-jin407891080/
- [ ] 2.[LeetCode 739. Daily Temperatures](https://leetcode.com/problems/next-greater-element-i/description/) ``easy`` like: 11.8k, dislike: 258 很經典
- [ ] 3.[LeetCode 496. Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/description/) ``easy`` like: 7.3k, dislike: 556 這題很棒，不easy
- [ ] 4.[LeetCode 503. Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/description/) ``medium`` like: 7.5k, dislike: 159 

#### Hard
1. [LeetCode 84. Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) ``medium`` like: 16.1k, dislike: 232 
   - key: 找往右first smaller和往左first smaller，夾起來就是每個height[i]能長出的寬度
   - very classic! mono stack along 2 side

