# ForceCollide

The collision force treats nodes as circles with a given radius, rather than points, and prevents nodes from overlapping. More formally, two nodes a and b are separated so that the distance between a and b is at least radius(a) + radius(b). To reduce jitter, this is by default a “soft” constraint with a configurable strength and iteration count. The generic refers to the type of data for a node.
