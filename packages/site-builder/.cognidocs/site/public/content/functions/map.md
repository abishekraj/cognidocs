# map

Returns a new array containing the mapped values from iterable, in order, as defined by given mapper function. Equivalent to array.map and Array.from.


**Return Type:** `U[]`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `iterable` | `Iterable<T>` | No | - |
| `mapper` | `(value: T, index: number, iterable: Iterable<T>) => U` | No | - |