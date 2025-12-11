# group

Groups the specified iterable of values into an InternMap from key to array of value.


**Return Type:** `NestedInternMap<TObject, TObject[], TKeys>`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `iterable` | `Iterable<TObject>` | No | The iterable to group. |
| `keys` | `{
        [Index in keyof TKeys]: (value: TObject, index: number, values: TObject[]) => TKeys[Index];
    }` | No | The key functions. |