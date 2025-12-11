# area

Constructs a new area generator with the default settings. If x, y0 or y1 are specified, sets the corresponding accessors to the specified function or number and returns this area generator. The generic refers to the data type of an element in the input array passed into the area generator.


**Return Type:** `Area<Datum>`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `x` | `number \| ((d: Datum, index: number, data: Datum[]) => number)` | Yes | Sets the x accessor. |
| `y0` | `number \| ((d: Datum, index: number, data: Datum[]) => number)` | Yes | Sets the y0 accessor. |
| `y1` | `number \| ((d: Datum, index: number, data: Datum[]) => number)` | Yes | Sets the y1 accessor. |