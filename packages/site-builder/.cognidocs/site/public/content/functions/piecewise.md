# piecewise

Returns a piecewise zoom interpolator, composing zoom interpolators for each adjacent pair of zoom view. The returned interpolator maps `t` in `[0, 1 / (n - 1)]` to `interpolate(values[0], values[1])`, `t` in `[1 / (n - 1), 2 / (n - 1)]` to `interpolate(values[1], values[2])`, and so on, where `n = values.length`. In effect, this is a lightweight linear scale. For example, to blend through three different zoom views: `d3.piecewise(d3.interpolateZoom, [[0, 0, 1], [0, 0, 10], [0, 0, 15]])`. interpolate defaults to d3.interpolate.


**Return Type:** `ZoomInterpolator`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `values` | `ZoomView[]` | No | - |