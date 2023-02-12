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
       (兩群之間有邊，單群之內無邊). ex: coloring problems

####    How are these represented?
- Adjacency List 
- Adjacency Matrix

####    Traversal Types
1. DFS: depth first search
2. BFS: breadth first search

***

###  Concept
Given ``n`` nodes labeled from ``0`` to ``n-1`` and a list of undirected edges (``n=8``):
![Alt text](traversals/graph-dfs.png "Optional title")
1.  Determine the connected components in a graph.
2.  Given a set of nodes and edges, find out which components belong to a group and how many such groups exist.

