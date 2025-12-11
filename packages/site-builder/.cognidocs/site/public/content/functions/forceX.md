# forceX

Creates a new positioning force along the x-axis towards the given position x. If x is not specified, it defaults to 0.


**Return Type:** `ForceX<NodeDatum>`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `x` | `number \| ((d: NodeDatum, i: number, data: NodeDatum[]) => number)` | Yes | - |