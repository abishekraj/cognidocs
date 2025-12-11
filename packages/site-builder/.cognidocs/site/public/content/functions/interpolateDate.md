# interpolateDate

Returns an interpolator between the two dates `a` and `b`. Note: *no defensive copy* of the returned date is created; the same Date instance is returned for every evaluation of the interpolator. No copy is made for performance reasons; interpolators are often part of the inner loop of animated transitions.


**Return Type:** `(t: number) => Date`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `a` | `Date` | No | - |
| `b` | `Date` | No | - |