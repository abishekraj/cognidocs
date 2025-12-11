# ForceCenter

The centering force translates nodes uniformly so that the mean position of all nodes (the center of mass if all nodes have equal weight) is at the given position [x,y]. This force modifies the positions of nodes on each application; it does not modify velocities, as doing so would typically cause the nodes to overshoot and oscillate around the desired center. This force helps keeps nodes in the center of the viewport, and unlike the positioning force, it does not distort their relative positions. The generic refers to the type of data for a node.
