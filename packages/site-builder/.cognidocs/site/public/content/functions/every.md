# every

Returns true if the given test function returns true for every value in the given iterable. This method returns as soon as test returns a non-truthy value or all values are iterated over. Equivalent to array.every.

**Return Type:** `boolean`

## Parameters

| Name       | Type                                                          | Optional | Description |
| :--------- | :------------------------------------------------------------ | :------- | :---------- |
| `iterable` | `Iterable<T>`                                                 | No       | -           |
| `test`     | `(value: T, index: number, iterable: Iterable<T>) => unknown` | No       | -           |
