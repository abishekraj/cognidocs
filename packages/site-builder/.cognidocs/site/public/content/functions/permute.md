# permute

Returns a permutation of the specified source object (or array) using the specified iterable of keys. The returned array contains the corresponding property of the source object for each key in keys, in order. For example, `permute(["a", "b", "c"], [1, 2, 0]) // ["b", "c", "a"]` It is acceptable to have more keys than source elements, and for keys to be duplicated or omitted.


**Return Type:** `T[]`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `source` | `{ [key: number]: T }` | No | - |
| `keys` | `Iterable<number>` | No | - |