# treemapSlice

Divides the rectangular area specified by x0, y0, x1, y1 vertically according the value of each of the specified node’s children. The children are positioned in order, starting with the top edge (y0) of the given rectangle. If the sum of the children’s values is less than the specified node’s value (i.e., if the specified node has a non-zero internal value), the remaining empty space will be positioned on the bottom edge (y1) of the given rectangle.


**Return Type:** `void`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `node` | `HierarchyRectangularNode<any>` | No | - |
| `x0` | `number` | No | - |
| `y0` | `number` | No | - |
| `x1` | `number` | No | - |
| `y1` | `number` | No | - |