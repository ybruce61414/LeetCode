# Interval
#### Main Concept
- General approach:
  1. __Sorting__: Start by sorting the given intervals based on their start times. This is often accomplished using built-in sorting functions or custom sorting methods.

  2. __Iteration__: Proceed to iterate through the sorted list of intervals.

  3. __Merging__: For each interval being iterated, check if it can be merged with the previous interval. Merge them if the current interval's start time is less than or equal to the previous interval's end time.

  4. __Merge Operation__: If merging is possible, update the previous interval's end time to be the maximum of the two intervals, effectively merging them into a larger interval.

  5. __Continuation__: Continue iterating to the next interval and repeat the merging process until all intervals have been processed.

  6. __Result__: The final list of intervals will now contain all merged intervals.

####    Basics
*must*:
- [ ] 1.[LeetCode 56. Merge Intervals](https://leetcode.com/problems/merge-intervals/) ``miedium`` 20k
  - key: 排序start time，keep住第一個interval往後迭代，看是否合併（interval B開始時間早於interval A結束時間）