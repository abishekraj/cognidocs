# pointer

Returns a two-element array of numbers [x, y] representing the coordinates of the specified event relative to the specified target. event can be a MouseEvent, a PointerEvent, a Touch, or a custom event holding a UIEvent as event.sourceEvent. If target is not specified, it defaults to the source event’s currentTarget property, if available. If the target is an SVG element, the event’s coordinates are transformed using the inverse of the screen coordinate transformation matrix. If the target is an HTML element, the event’s coordinates are translated relative to the top-left corner of the target’s bounding client rectangle. (As such, the coordinate system can only be translated relative to the client coordinates. See also GeometryUtils.) Otherwise, [event.pageX, event.pageY] is returned.


**Return Type:** `[number, number]`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `event` | `any` | No | The specified event. |
| `target` | `any` | Yes | The target which the coordinates are relative to. |