# mode

Returns the mode of the given iterable, i.e. the value which appears the most often. In case of equality, returns the first of the relevant values. If the iterable contains no comparable values, returns undefined. An optional accessor function may be specified, which is equivalent to calling Array.from before computing the mode. This method ignores undefined, null and NaN values; this is useful for ignoring missing data.

**Return Type:** `number`

## Parameters

| Name       | Type                                     | Optional | Description |
| :--------- | :--------------------------------------- | :------- | :---------- |
| `iterable` | `Iterable<Numeric \| undefined \| null>` | No       | -           |
