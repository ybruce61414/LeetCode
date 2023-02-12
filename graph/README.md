# Graph Traversal (or Search) Note
####    What is Graph?
- Graph is a non-linear data structure consisting of vertices and edges.
- Vertices: the fundamental units of the graph. Sometimes, vertices are also known as **vertex** or **node**.
- Edges: indicate a symmetric relationship between their ends(vertices), **directed** or **undirected**. 
- Important traits:
    1. A graph with no **cycles** is called a **tree**. A tree is an acyclic connected graph.
    2. A **path** is a sequence of adjacent vertices with no repeated ones.
    3. A **cycle** is a path where first and last vertices are the same.
    4. **DAG**: directed acyclic graph (directed graph with no cycles).
    5. **Bipartite graph**: A graph whose vertices can be divided into two sets such that all edges connect a vertex in one set with a vertex in the other set
       (兩群之間有邊，單群之內無邊). ex: [coloring problems](https://leetcode.com/problems/possible-bipartition/solutions/213114/The-classical-graph-problem-%222-Coloring-Problem%22-solved-using-DFS/)

####    How are these represented?
- Adjacency List 
- Adjacency Matrix

####    Types
1. DFS: depth first search
2. BFS: breadth first search

####    Comparison
- DFS has lower **memory** because it's not required to store all of the child pointers at each level.
- Solutions at low depth: BFS
- Solutions at maximum depth: DFS

| Applications                                         | DFS | BFS |
|:-----------------------------------------------------|:---:|:---:|
| Spanning forest, connected components, paths, cycles |  ✅  |     |
| Shortest paths                                       |     |  ✅  |
| Minimal use of memory space                          |  ✅  |     |
***

###  Concept
  Given ``n`` nodes labeled from ``0`` to ``n-1`` and a list of undirected edges (``n=8``, ``adjList``):
  ![Alt text](traversals/graph-dfs.png "Optional title")
####  DFS
1.  Recursively:
    ```js
    // ...
    const dfsRecursive = start => {
      const path = [];
      const visited = {};
      
      const dfs = node => {
          if (node === undefined || node === null) return;
      
          visited[node] = true;
          path.push(node);
      
          for (let neighbor of adjList[node]) {
            if (!visited[neighbor]) dfs(neighbor);
          }
      };
      
      dfs(start);
      return path;
    };
    
    // start traversal from node 3
    dfsRecursive(3);
    ```
2.  Iteratively:
    ```js
    // ...
    const dfsIterative = start => {
      const stack = [];
      const visited = {};
      const path = [];
    
      // init
      stack.push(start);
      visited[start] = true;
    
      while (stack.length > 0) {
      const pop = stack.pop();
      path.push(pop);
    
        for (let neighbor of adjList[pop]) {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            stack.push(neighbor);
          }
        }
      }
    
      return path;
    };
    
    // start traversal from node 3
    dfsIterative(3);
    ```

