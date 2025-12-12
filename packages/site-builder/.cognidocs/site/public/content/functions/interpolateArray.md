# interpolateArray

Returns an interpolator between the two arrays `a` and `b`. Internally, an array template is created that is the same length in `b`. For each element in `b`, if there exists a corresponding element in `a`, a generic interpolator is created for the two elements using `interpolate`. If there is no such element, the static value from `b` is used in the template. Then, for the given parameter `t`, the template’s embedded interpolators are evaluated. The updated array template is then returned. For example, if `a` is the array `[0, 1]` and `b` is the array `[1, 10, 100]`, then the result of the interpolator for `t = 0.5` is the array `[0.5, 5.5, 100]`. Note: _no defensive copy_ of the template array is created; modifications of the returned array may adversely affect subsequent evaluation of the interpolator. No copy is made for performance reasons; interpolators are often part of the inner loop of animated transitions.

**Return Type:** `ArrayInterpolator<A>`

## Parameters

| Name | Type    | Optional | Description |
| :--- | :------ | :------- | :---------- |
| `a`  | `any[]` | No       | -           |
| `b`  | `A`     | No       | -           |
