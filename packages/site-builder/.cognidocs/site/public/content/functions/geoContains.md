# geoContains

Returns true if and only if the specified GeoJSON object contains the specified point, or false if the object does not contain the point. The point must be specified as a two-element array [longitude, latitude] in degrees. For Point and MultiPoint geometries, an exact test is used; for a Sphere, true is always returned; for other geometries, an epsilon threshold is applied.

**Return Type:** `boolean`

## Parameters

| Name     | Type                                                                                               | Optional | Description |
| :------- | :------------------------------------------------------------------------------------------------- | :------- | :---------- |
| `object` | `ExtendedFeature \| ExtendedFeatureCollection \| GeoGeometryObjects \| ExtendedGeometryCollection` | No       | -           |
| `point`  | `[number, number]`                                                                                 | No       | -           |
