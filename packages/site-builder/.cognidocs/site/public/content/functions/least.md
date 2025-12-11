# least

Returns the least element of the specified iterable according to the specified comparator. If comparator is not specified, it defaults to ascending.


**Return Type:** `T | undefined`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `iterable` | `Iterable<T>` | No | - |
| `comparator` | `(a: T, b: T) => number` | Yes | - |