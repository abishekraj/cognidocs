# sort

Returns an array containing the values in the given iterable in the sorted order defined by the given comparator function. If comparator is not specified, it defaults to d3.ascending. Equivalent to array.sort, except that it does not mutate the given iterable, and the comparator defaults to natural order instead of lexicographic order.


**Return Type:** `T[]`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `iterable` | `Iterable<T>` | No | - |
| `comparator` | `(a: T, b: T) => number` | Yes | - |