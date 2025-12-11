# greatest

Returns the greatest element of the specified iterable according to the specified comparator or accessor. If the given iterable contains no comparable elements (i.e., the comparator returns NaN when comparing each element to itself), returns undefined. If comparator is not specified, it defaults to ascending.


**Return Type:** `T | undefined`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `iterable` | `Iterable<T>` | No | - |
| `comparator` | `(a: T, b: T) => number` | Yes | - |