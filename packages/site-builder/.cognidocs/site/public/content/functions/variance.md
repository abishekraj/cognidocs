# variance

Returns an unbiased estimator of the population variance of the given iterable of numbers using Welford’s algorithm. If the iterable has fewer than two numbers, returns undefined. An optional accessor function may be specified, which is equivalent to calling Array.from before computing the variance. This method ignores undefined and NaN values; this is useful for ignoring missing data.


**Return Type:** `number | undefined`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `iterable` | `Iterable<Numeric \| undefined \| null>` | No | - |