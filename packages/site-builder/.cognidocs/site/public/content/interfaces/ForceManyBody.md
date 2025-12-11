# ForceManyBody

The many-body (or n-body) force applies mutually amongst all nodes. It can be used to simulate gravity (attraction) if the strength is positive, or electrostatic charge (repulsion) if the strength is negative. This implementation uses quadtrees and the Barnes–Hut approximation to greatly improve performance; the accuracy can be customized using the theta parameter. Unlike links, which only affect two linked nodes, the charge force is global: every node affects every other node, even if they are on disconnected subgraphs. The generic refers to the type of data for a node.
