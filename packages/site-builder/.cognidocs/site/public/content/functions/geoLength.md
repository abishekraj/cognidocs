# geoLength

Returns the great-arc length of the specified GeoJSON object in radians. For polygons, returns the perimeter of the exterior ring plus that of any interior rings. This is the spherical equivalent of path.measure.

**Return Type:** `number`

## Parameters

| Name     | Type                                                                                               | Optional | Description |
| :------- | :------------------------------------------------------------------------------------------------- | :------- | :---------- |
| `object` | `ExtendedFeature \| ExtendedFeatureCollection \| GeoGeometryObjects \| ExtendedGeometryCollection` | No       | -           |
