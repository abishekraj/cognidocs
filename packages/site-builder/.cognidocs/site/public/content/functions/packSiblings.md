# packSiblings

Packs the specified array of circles, each of which must have a `circle.r` property specifying the circle’s radius. The circles are positioned according to the front-chain packing algorithm by Wang et al.


**Return Type:** `Array<Datum & PackCircle>`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `circles` | `Datum[]` | No | The specified array of circles to pack. |