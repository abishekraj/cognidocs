# interpolateTransformCss

Returns an interpolator between the two 2D CSS transforms represented by `a` and `b`. Each transform is decomposed to a standard representation of translate, rotate, *x*-skew and scale; these component transformations are then interpolated. This behavior is standardized by CSS: see [matrix decomposition for animation](http://www.w3.org/TR/css3-2d-transforms/#matrix-decomposition).


**Return Type:** `(t: number) => string`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `a` | `string` | No | - |
| `b` | `string` | No | - |