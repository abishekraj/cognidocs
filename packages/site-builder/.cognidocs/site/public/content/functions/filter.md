# filter

Returns a new array containing the values from iterable, in order, for which the given test function returns true. Equivalent to array.filter.


**Return Type:** `T[]`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `iterable` | `Iterable<T>` | No | - |
| `test` | `(value: T, index: number, iterable: Iterable<T>) => unknown` | No | - |