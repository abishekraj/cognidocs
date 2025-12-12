# index

Equivalent to group but returns a unique value per compound key instead of an array, throwing if the key is not unique.

**Return Type:** `NestedInternMap<TObject, TObject, TKeys>`

## Parameters

| Name       | Type                | Optional | Description            |
| :--------- | :------------------ | :------- | :--------------------- |
| `iterable` | `Iterable<TObject>` | No       | The iterable to group. |
| `keys`     | `{                  |

        [Index in keyof TKeys]: (value: TObject, index: number, values: TObject[]) => TKeys[Index];
    }` | No | - |
