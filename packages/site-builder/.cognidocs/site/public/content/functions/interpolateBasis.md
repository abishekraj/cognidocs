# interpolateBasis

Returns a uniform nonrational B-spline interpolator through the specified array of `values`, which must be numbers. Implicit control points are generated such that the interpolator returns `values[0]` at `t` = 0 and `values[values.length - 1]` at `t` = 1. See also [`d3.curveBasis`](https://github.com/d3/d3-shape#curveBasis).

**Return Type:** `(t: number) => number`

## Parameters

| Name          | Type       | Optional | Description |
| :------------ | :--------- | :------- | :---------- |
| `splineNodes` | `number[]` | No       | -           |
