# rank

Returns an array with the rank of each value in the iterable, i.e. the zero-based index of the value when the iterable is sorted. Nullish values are sorted to the end and ranked NaN. An optional comparator or accessor function may be specified; the latter is equivalent to calling array.map(accessor) before computing the ranks. If comparator is not specified, it defaults to ascending. Ties (equivalent values) all get the same rank, defined as the first time the value is found.


**Return Type:** `Float64Array`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `iterable` | `Iterable<Numeric \| undefined \| null>` | No | - |