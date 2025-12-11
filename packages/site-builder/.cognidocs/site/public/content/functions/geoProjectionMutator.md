# geoProjectionMutator

Constructs a new projection from the specified raw projection factory and returns a mutate function to call whenever the raw projection changes. The factory must return a raw projection. The returned mutate function returns the wrapped projection. When creating a mutable projection, the mutate function is typically not exposed.


**Return Type:** `() => GeoProjection`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `factory` | `(...args: any[]) => GeoRawProjection` | No | - |