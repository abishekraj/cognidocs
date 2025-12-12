# interpolateBasisClosed

Returns a uniform nonrational B-spline interpolator through the specified array of `values`, which must be numbers. The control points are implicitly repeated such that the resulting one-dimensional spline has cyclical C² continuity when repeated around `t` in [0,1]. See also [`d3.curveBasisClosed`](https://github.com/d3/d3-shape#curveBasisClosed).

**Return Type:** `(t: number) => number`

## Parameters

| Name          | Type       | Optional | Description |
| :------------ | :--------- | :------- | :---------- |
| `splineNodes` | `number[]` | No       | -           |
