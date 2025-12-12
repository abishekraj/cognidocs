# groups

Equivalent to group, but returns nested arrays instead of nested maps.

**Return Type:** `NestedArray<TObject, TObject[], TKeys>`

## Parameters

| Name       | Type                | Optional | Description            |
| :--------- | :------------------ | :------- | :--------------------- |
| `iterable` | `Iterable<TObject>` | No       | The iterable to group. |
| `keys`     | `{                  |

        [Index in keyof TKeys]: (value: TObject, index: number, values: TObject[]) => TKeys[Index];
    }` | No | The key functions. |
