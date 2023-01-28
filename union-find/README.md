# Union-Find (Disjoint Sets) Note
####    What is Union-Find?
1. A data structure that can keep track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets.
2. The basic idea is that it simulates a forest (a group of trees) using an array (-like) data struture. The indexes of the array represent the nodes. The values of the array represent each node's parent.

####    How are these represented?
Using an **array** or a **hash table** to store the parent of each element.

####    Characteristics of Find Operation
1. It's fast when the trees in the forest have low heights ``O(logN)``.
2. It's slow (the worst case) when we are getting the skew trees ``O(N)``, where ``N`` is the number of the nodes in that tree.
3. Using **path compression**: 
   *    The effect of path compression is that evey node on the path from ``X`` to the ``root`` has its parent changed to the root.
***

###  Usage
1.  Determine the connected components in a graph.
2.  Given a set of nodes and edges, find out which components belong to a group and how many such groups exist.

###  Operations
1.  Make set 
    ```js
    const parent = {};
    
    for (let i = 0; i < elements.length; i++) {
      // O(N)
      const ele = elements[i];
      if (!parent[ele]) parent[ele] = ele;
    }
    ```
2.  Find 
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
3.  Union
    ```js
    const union = (ele1, ele2) => {
        const root1 = find(ele1);
        const root2 = find(ele2);
        
        // O(MlogN): M times of find 
        if (root1 !== root2) parent[root1] = root2;
    };
    ```