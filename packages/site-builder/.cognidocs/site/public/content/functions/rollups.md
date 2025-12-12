# rollups

Equivalent to rollup, but returns nested arrays instead of nested maps.

**Return Type:** `NestedArray<TObject, TReduce, TKeys>`

## Parameters

| Name       | Type                             | Optional | Description            |
| :--------- | :------------------------------- | :------- | :--------------------- |
| `iterable` | `Iterable<TObject>`              | No       | The iterable to group. |
| `reduce`   | `(values: TObject[]) => TReduce` | No       | The reduce function.   |
| `keys`     | `{                               |

        [Index in keyof TKeys]: (value: TObject, index: number, values: TObject[]) => TKeys[Index];
    }` | No | The key functions. |
