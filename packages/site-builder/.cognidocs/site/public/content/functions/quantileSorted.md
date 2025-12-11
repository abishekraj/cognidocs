# quantileSorted

Similar to quantile, but expects the input to be a sorted array of values. In contrast with quantile, the accessor is only called on the elements needed to compute the quantile.


**Return Type:** `number | undefined`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `array` | `Array<Numeric \| undefined \| null>` | No | - |
| `p` | `number` | No | - |