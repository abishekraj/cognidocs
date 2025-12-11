# groupSort

Groups the specified iterable of elements according to the specified key function, sorts the groups according to the specified comparator, and then returns an array of keys in sorted order. The comparator will be asked to compare two groups a and b and should return a negative value if a should be before b, a positive value if a should be after b, or zero for a partial ordering.


**Return Type:** `TKey[]`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `iterable` | `Iterable<TObject>` | No | - |
| `comparator` | `(a: TObject[], b: TObject[]) => number` | No | - |
| `key` | `(value: TObject) => TKey` | No | - |