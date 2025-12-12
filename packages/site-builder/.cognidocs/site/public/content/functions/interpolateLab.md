# interpolateLab

Returns a Lab color space interpolator between the two colors _a_ and _b_. The colors _a_ and _b_ need not be in Lab; they will be converted to Lab using `d3.lab`. The return value of the interpolator is an RGB string.

**Return Type:** `(t: number) => string`

## Parameters

| Name | Type                            | Optional | Description |
| :--- | :------------------------------ | :------- | :---------- |
| `a`  | `string \| ColorCommonInstance` | No       | -           |
| `b`  | `string \| ColorCommonInstance` | No       | -           |
