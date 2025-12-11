# interpolateRgbBasis

Returns a uniform nonrational B-spline interpolator through the specified array of *colors*, which are converted to RGB color space. Implicit control points are generated such that the interpolator returns `colors[0]` at `t = 0` and `colors[colors.length - 1]` at `t = 1`. Opacity interpolation is not currently supported. See also `d3.interpolateBasis`, and see [d3-scale-chromatic](https://github.com/d3/d3-scale-chromatic) for examples.


**Return Type:** `(t: number) => string`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `colors` | `Array<string \| ColorCommonInstance>` | No | - |