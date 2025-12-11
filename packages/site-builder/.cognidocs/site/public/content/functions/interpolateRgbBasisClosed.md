# interpolateRgbBasisClosed

Returns a uniform nonrational B-spline interpolator through the specified array of colors, which are converted to RGB color space. The control points are implicitly repeated such that the resulting spline has cyclical C² continuity when repeated around `t` in [0,1]; this is useful, for example, to create cyclical color scales. Opacity interpolation is not currently supported. See also `d3.interpolateBasisClosed, and see [d3-scale-chromatic](https://github.com/d3/d3-scale-chromatic) for examples.


**Return Type:** `(t: number) => string`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `colors` | `Array<string \| ColorCommonInstance>` | No | - |