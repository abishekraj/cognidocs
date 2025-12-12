# flatRollup

Equivalent to rollup, but returns a flat array of [key0, key1, …, value] instead of nested maps.

**Return Type:** `Array<[...TKeys, TReduce]>`

## Parameters

| Name       | Type                             | Optional | Description            |
| :--------- | :------------------------------- | :------- | :--------------------- |
| `iterable` | `Iterable<TObject>`              | No       | The iterable to group. |
| `reduce`   | `(values: TObject[]) => TReduce` | No       | The reduce function.   |
| `keys`     | `{                               |

        [Index in keyof TKeys]: (value: TObject, index: number, values: TObject[]) => TKeys[Index];
    }` | No | The key functions. |
