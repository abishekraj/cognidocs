# forceCollide

Creates a new circle collision force with the specified radius. If radius is not specified, it defaults to the constant one for all nodes.

**Return Type:** `ForceCollide<NodeDatum>`

## Parameters

| Name     | Type                                                                     | Optional | Description |
| :------- | :----------------------------------------------------------------------- | :------- | :---------- |
| `radius` | `number \| ((node: NodeDatum, i: number, nodes: NodeDatum[]) => number)` | Yes      | -           |
