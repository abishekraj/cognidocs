# precisionRound

Returns a suggested decimal precision for format types that round to significant digits given the specified numeric step and max values.

**Return Type:** `number`

## Parameters

| Name   | Type     | Optional | Description                                                                                                                                                           |
| :----- | :------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `step` | `number` | No       | The step represents the minimum absolute difference between values that will be formatted. (This assumes that the values to be formatted are also multiples of step.) |
| `max`  | `number` | No       | max represents the largest absolute value that will be formatted.                                                                                                     |
