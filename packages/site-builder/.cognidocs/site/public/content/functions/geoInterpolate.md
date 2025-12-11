# geoInterpolate

Returns an interpolator function given two points a and b. Each point must be specified as a two-element array [longitude, latitude] in degrees.


**Return Type:** `(t: number) => [number, number]`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `a` | `[number, number]` | No | Point specified as a two-element array [longitude, latitude] in degrees. |
| `b` | `[number, number]` | No | Point specified as a two-element array [longitude, latitude] in degrees. |