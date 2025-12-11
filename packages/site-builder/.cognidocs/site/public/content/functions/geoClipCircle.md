# geoClipCircle

Generates a clipping function transforming a stream such that geometries are bounded by a small circle of radius angle around the projection’s center. Typically used for pre-clipping.


**Return Type:** `(stream: GeoStream) => GeoStream`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `angle` | `number` | No | A clipping angle. |