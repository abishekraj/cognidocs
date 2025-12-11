# cumsum

Returns the cumulative sum of the given iterable of numbers, as a Float64Array of the same length. If the iterable contains no numbers, returns zeros. An optional accessor function may be specified, which is equivalent to calling Array.from before computing the cumulative sum. This method ignores undefined and NaN values; this is useful for ignoring missing data.


**Return Type:** `Float64Array`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `iterable` | `Iterable<Numeric \| undefined \| null>` | No | - |