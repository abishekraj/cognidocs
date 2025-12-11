# forceRadial

Create a new radial positioning force towards a circle of the specified radius centered at ⟨x,y⟩. If x and y are not specified, they default to ⟨0,0⟩. The strength of the force is proportional to the one-dimensional distance between the node’s position and the target position. While this force can be used to position individual nodes, it is intended primarily for global forces that apply to all (or most) nodes. The generic refers to the type of data for a node.


**Return Type:** `ForceRadial<NodeDatum>`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `radius` | `number \| ((d: NodeDatum, i: number, data: NodeDatum[]) => number)` | No | - |
| `x` | `number \| ((d: NodeDatum, i: number, data: NodeDatum[]) => number)` | Yes | - |
| `y` | `number \| ((d: NodeDatum, i: number, data: NodeDatum[]) => number)` | Yes | - |