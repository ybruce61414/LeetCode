# Union-Find (Disjoint Sets) Note

A data structure that can keep track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets.
####  How are these represented?
Using an array which stores the parent of each element.

<hr style="border:1px solid gray">

###  Usage
1.  Determine the connected components in a graph.
2.  Grouping.

###  Operations
1.  Make set O(N)
    ```js
    const parent = {};
    
    for (let i = 0; i < elements.length; i++) {
      const ele = elements[i];
      if (!parent[ele]) parent[ele] = ele;
    }
    ```
2.  Find O(logN)
    ```js
    const find = element => {
      if (parent[element] !== element) {
          // with path compression
          parent[element] = find(parent[element]);
      }
      
      // O(logN): tree height
      return parent[element];
    };
    ```
3.  Union O(MlogN)
    ```js
    const union = (ele1, ele2) => {
        const root1 = find(ele1);
        const root2 = find(ele2);
        
        // O(MlogN): M times of find 
        if (root1 !== root2) parent[root1] = root2;
    };
    ```