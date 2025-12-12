# interpolateNumberArray

Returns an interpolator between the two arrays of numbers a and b. Internally, an array template is created that is the same type and length as b. For each element in b, if there exists a corresponding element in a, the values are directly interpolated in the array template. If there is no such element, the static value from b is copied. The updated array template is then returned. Note: For performance reasons, no defensive copy is made of the template array and the arguments a and b; modifications of these arrays may affect subsequent evaluation of the interpolator.

**Return Type:** `(t: number) => T`

## Parameters

| Name | Type                      | Optional | Description |
| :--- | :------------------------ | :------- | :---------- |
| `a`  | `NumberArray \| number[]` | No       | -           |
| `b`  | `T`                       | No       | -           |
