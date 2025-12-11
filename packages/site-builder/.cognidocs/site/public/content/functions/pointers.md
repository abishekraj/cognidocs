# pointers

Returns an array [[x0, y0], [x1, y1]…] of coordinates of the specified event’s pointer locations relative to the specified target. For touch events, the returned array of positions corresponds to the event.touches array; for other events, returns a single-element array. If target is not specified, it defaults to the source event’s currentTarget property, if any.


**Return Type:** `Array<[number, number]>`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `event` | `any` | No | The specified event. |
| `target` | `any` | Yes | The target which the coordinates are relative to. |