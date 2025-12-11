# interpolateLab

Returns a Lab color space interpolator between the two colors *a* and *b*. The colors *a* and *b* need not be in Lab; they will be converted to Lab using `d3.lab`. The return value of the interpolator is an RGB string.


**Return Type:** `(t: number) => string`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `a` | `string \| ColorCommonInstance` | No | - |
| `b` | `string \| ColorCommonInstance` | No | - |