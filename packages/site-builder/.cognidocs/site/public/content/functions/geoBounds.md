# geoBounds

Returns the spherical bounding box for the specified GeoJSON object. The bounding box is represented by a two-dimensional array: [[left, bottom], [right, top]], where left is the minimum longitude, bottom is the minimum latitude, right is maximum longitude, and top is the maximum latitude. All coordinates are given in degrees. (Note that in projected planar coordinates, the minimum latitude is typically the maximum y-value, and the maximum latitude is typically the minimum y-value.) This is the spherical equivalent of path.bounds.


**Return Type:** `[[number, number], [number, number]]`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `object` | `ExtendedFeature \| ExtendedFeatureCollection \| GeoGeometryObjects \| ExtendedGeometryCollection` | No | - |