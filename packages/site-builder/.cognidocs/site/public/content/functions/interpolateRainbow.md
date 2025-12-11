# interpolateRainbow

Given a number t in the range [0,1], returns the corresponding color from d3.interpolateWarm scale from [0.0, 0.5] followed by the d3.interpolateCool scale from [0.5, 1.0], thus implementing the cyclical less-angry rainbow color scheme.


**Return Type:** `string`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `t` | `number` | No | A number in the interval [0, 1]. |