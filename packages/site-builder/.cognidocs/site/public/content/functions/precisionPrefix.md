# precisionPrefix

Returns a suggested decimal precision for use with locale.formatPrefix given the specified numeric step and reference value.


**Return Type:** `number`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `step` | `number` | No | The step represents the minimum absolute difference between values that will be formatted. (This assumes that the values to be formatted are also multiples of step.) |
| `value` | `number` | No | Reference value determines which SI prefix will be used. |