# reduce

Returns the reduced value defined by given reducer function, which is repeatedly invoked for each value in iterable, being passed the current reduced value and the next value. Equivalent to array.reduce.

**Return Type:** `T`

## Parameters

| Name           | Type                                                                                    | Optional | Description |
| :------------- | :-------------------------------------------------------------------------------------- | :------- | :---------- |
| `iterable`     | `Iterable<T>`                                                                           | No       | -           |
| `reducer`      | `(previousValue: T, currentValue: T, currentIndex: number, iterable: Iterable<T>) => T` | No       | -           |
| `initialValue` | `T`                                                                                     | Yes      | -           |
