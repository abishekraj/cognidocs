# isLabelCoordinateInPath

Checks if the  x or y coordinate of the edge label appears in the given SVG path data string.


**Return Type:** `boolean`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `point` | `Point` | No | The Point object with x and y properties to check. |
| `dAttr` | `string` | No | SVG path data string (the 'd' attribute of an SVG path element). |