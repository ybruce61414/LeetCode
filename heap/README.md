# Binary Heap (Priority Queue) Note
####    What is a heap?
A heap is a **binary tree** with two properties:
1. **Order**: The value of a node must be >= (or <=) than the values of its children.
2. **Shape**: Must be a *complete binary tree* (every level except the last, is completely filled, and all nodes in the last level are as far left as possible).

####    Why heap?
It's the most efficient way to implement a **priority queue**.

####    How are these represented?
Use an **array** (0-indexed):
> - 用sorted array是最簡單直接的方式來達到priority queue，但insertion是*O(n)*，每個element進來就排序;
> - 用array ＋ heap特性實作priority queue (array 變成partially sorted)，insertion是*O(log(n))*，每個element進來最多是比較樹高次數。
1. parent index of *i*: floor((*i* - 1) / 2)
2. left child index of *i*: *i* * 2 + 1
3. right child index of *i*: *i* * 2 + 2

####    Tricky part: heapifying the array ``O(n)``
> - 直覺會覺得是``O(nlog(n))``，每個點進來排``log(n)`` ，共n個點，錯的。
> - 想法：用percolate down，所有的leaf node就不用考慮，因為他下面沒有層了（直接省掉對node最多的level計算次數），然後一路往上層走，到最頂端root node，只有他需要做到``log(n)``，所以時間複雜度其實是比``O(nlog(n))``小的，答案是``O(n)``。
> - Proof: $$S = \sum_{i=0}^h 2^i(h - i)$$
###  Usage
1.  Dijkastra's algorithm.
2.  Finding K'th largest / smallest element.

**The Cauchy-Schwarz Inequality**

$$\left( \sum_{i=0}^h 2^i(h - i) \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$

###  Operations
We need to adjust the locations of the nodes to fit the heap property, the process is called *heapifying*. \
Heapifying the element from *top to bottom* / *bottom to top* is called *percolate down* / *percolate up*.
1. Percolate down
2. Extract (or Deleting) extreme
3. Percolate up
4. Insert
5. Heapify