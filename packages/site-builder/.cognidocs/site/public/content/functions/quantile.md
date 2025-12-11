# quantile

Returns the p-quantile of the given iterable of numbers, where p is a number in the range [0, 1]. An optional accessor function may be specified, which is equivalent to calling array.map(accessor) before computing the quantile.


**Return Type:** `number | undefined`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `iterable` | `Iterable<Numeric \| undefined \| null>` | No | - |
| `p` | `number` | No | - |