# interpolateHcl

Returns an HCL color space interpolator between the two colors `a` and `b`. The colors `a` and `b` need not be in HCL; they will be converted to HCL using `d3.hcl`. If either color’s hue or chroma is NaN, the opposing color’s channel value is used. The shortest path between hues is used. The return value of the interpolator is an RGB string.


**Return Type:** `(t: number) => string`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `a` | `string \| ColorCommonInstance` | No | - |
| `b` | `string \| ColorCommonInstance` | No | - |