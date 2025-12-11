# interpolateHsl

Returns an HSL color space interpolator between the two colors *a* and *b*. The colors *a* and *b* need not be in HSL; they will be converted to HSL using `d3.hsl`. If either color’s hue or saturation is NaN, the opposing color’s channel value is used. The shortest path between hues is used. The return value of the interpolator is an RGB string.


**Return Type:** `(t: number) => string`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `a` | `string \| ColorCommonInstance` | No | - |
| `b` | `string \| ColorCommonInstance` | No | - |