# geoProjection

Constructs a new projection from the specified raw projection, project. The project function takes the longitude and latitude of a given point in radians, often referred to as lambda (λ) and phi (φ), and returns a two-element array [x, y] representing its unit projection. The project function does not need to scale or translate the point, as these are applied automatically by projection.scale, projection.translate, and projection.center. Likewise, the project function does not need to perform any spherical rotation, as projection.rotate is applied prior to projection. If the project function exposes an invert method, the returned projection will also expose projection.invert.


**Return Type:** `GeoProjection`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `project` | `GeoRawProjection` | No | - |