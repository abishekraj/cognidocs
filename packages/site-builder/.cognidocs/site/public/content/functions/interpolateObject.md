# interpolateObject

Returns an interpolator between the two objects `a` and `b`. Internally, an object template is created that has the same properties as `b`. For each property in `b`, if there exists a corresponding property in `a`, a generic interpolator is created for the two elements using `interpolate`. If there is no such property, the static value from `b` is used in the template. Then, for the given parameter `t`, the template's embedded interpolators are evaluated and the updated object template is then returned. For example, if `a` is the object `{x: 0, y: 1}` and `b` is the object `{x: 1, y: 10, z: 100}`, the result of the interpolator for `t = 0.5` is the object `{x: 0.5, y: 5.5, z: 100}`. Note: _no defensive copy_ of the template object is created; modifications of the returned object may adversely affect subsequent evaluation of the interpolator. No copy is made for performance reasons; interpolators are often part of the inner loop of animated transitions.

**Return Type:** `(t: number) => U`

## Parameters

| Name | Type  | Optional | Description |
| :--- | :---- | :------- | :---------- |
| `a`  | `any` | No       | -           |
| `b`  | `U`   | No       | -           |
