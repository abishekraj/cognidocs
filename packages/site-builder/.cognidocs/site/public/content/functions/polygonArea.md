# polygonArea

Returns the signed area of the specified polygon. If the vertices of the polygon are in counterclockwise order (assuming a coordinate system where the origin <0,0> is in the top-left corner), the returned area is positive; otherwise it is negative, or zero.


**Return Type:** `number`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `polygon` | `Array<[number, number]>` | No | Array of coordinates <x0, y0>, <x1, y1> and so on. |