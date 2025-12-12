# geoStream

Streams the specified GeoJSON object to the specified projection stream. While both features and geometry objects are supported as input, the stream interface only describes the geometry, and thus additional feature properties are not visible to streams.

**Return Type:** `void`

## Parameters

| Name     | Type                                                                                               | Optional | Description |
| :------- | :------------------------------------------------------------------------------------------------- | :------- | :---------- |
| `object` | `ExtendedFeature \| ExtendedFeatureCollection \| GeoGeometryObjects \| ExtendedGeometryCollection` | No       | -           |
| `stream` | `GeoStream`                                                                                        | No       | -           |
