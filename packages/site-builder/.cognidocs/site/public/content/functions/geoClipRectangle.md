# geoClipRectangle

Generates a clipping function transforming a stream such that geometries are bounded by a rectangle of coordinates [[x0, y0], [x1, y1]]. Typically used for post-clipping.

**Return Type:** `(stream: GeoStream) => GeoStream`

## Parameters

| Name | Type     | Optional | Description    |
| :--- | :------- | :------- | :------------- |
| `x0` | `number` | No       | x0 coordinate. |
| `y0` | `number` | No       | y0 coordinate. |
| `x1` | `number` | No       | x1 coordinate. |
| `y1` | `number` | No       | y1 coordinate. |
