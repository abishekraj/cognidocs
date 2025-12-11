# geoClipAntimeridian

A clipping function transforming a stream such that geometries (lines or polygons) that cross the antimeridian line are cut in two, one on each side. Typically used for pre-clipping.


**Return Type:** `GeoStream`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `stream` | `GeoStream` | No | - |