# interpolateDiscrete

Returns a discrete interpolator for the given array of values. The returned interpolator maps `t` in `[0, 1 / n)` to values[0], `t` in `[1 / n, 2 / n)` to `values[1]`, and so on, where `n = values.length`. In effect, this is a lightweight quantize scale with a fixed domain of [0, 1].


**Return Type:** `(t: number) => T`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `values` | `T[]` | No | - |