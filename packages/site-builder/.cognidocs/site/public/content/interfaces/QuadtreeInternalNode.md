# QuadtreeInternalNode

Internal nodes of the quadtree are represented as four-element arrays in left-to-right, top-to-bottom order: 0 - the top-left quadrant, if any. 1 - the top-right quadrant, if any. 2 - the bottom-left quadrant, if any. 3 - the bottom-right quadrant, if any. A child quadrant may be undefined if it is empty.

## Properties

| Name     | Type | Optional | Description |
| :------- | :--- | :------- | :---------- |
| `length` | `4`  | No       | -           |
