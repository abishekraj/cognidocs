# some

Returns true if the given test function returns true for any value in the given iterable. This method returns as soon as test returns a truthy value or all values are iterated over. Equivalent to array.some.


**Return Type:** `boolean`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `iterable` | `Iterable<T>` | No | - |
| `test` | `(value: T, index: number, iterable: Iterable<T>) => unknown` | No | - |