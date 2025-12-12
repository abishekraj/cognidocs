# forceY

Creates a new positioning force along the y-axis towards the given position y. If y is not specified, it defaults to 0.

**Return Type:** `ForceY<NodeDatum>`

## Parameters

| Name | Type                                                                 | Optional | Description |
| :--- | :------------------------------------------------------------------- | :------- | :---------- |
| `y`  | `number \| ((d: NodeDatum, i: number, data: NodeDatum[]) => number)` | Yes      | -           |
