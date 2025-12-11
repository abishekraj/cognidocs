# interpolateHue

Returns an interpolator between the two hue angles `a` and `b`. If either hue is NaN, the opposing value is used. The shortest path between hues is used. The return value of the interpolator is a number in `[0, 360)`.


**Return Type:** `(t: number) => number`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `a` | `number` | No | - |
| `b` | `number` | No | - |