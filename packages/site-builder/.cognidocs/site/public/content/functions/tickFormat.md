# tickFormat

Returns a number format function suitable for displaying a tick value, automatically computing the appropriate precision based on the fixed interval between tick values, as determined by d3.tickStep.


**Return Type:** `(d: NumberValue) => string`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `start` | `number` | No | Start |
| `stop` | `number` | No | Stop |
| `count` | `number` | No | Approximate number of ticks to be used when calculating precision for the number format function. |
| `specifier` | `string` | Yes | An optional specifier allows a custom format where the precision of the format is automatically set by the scale as appropriate for the tick interval. If specifier uses the format type s, the scale will return a SI-prefix format based on the larger absolute value of start and stop. If the specifier already specifies a precision, this method is equivalent to locale.format. |