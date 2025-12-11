# ExtendedFeature

A GeoJSON-style Feature which support features built on GeoJSON GeometryObjects or GeoSphere. The first generic refers to the type(s) of d3-geo geometry objects underlying the ExtendedFeature. Unless explicitly ruled out, the geometry value is nullable. The second generic refers to the data type of the properties of the ExtendedFeature. Unless explicitly ruled out, the properties value is nullable.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `geometry` | `GeometryType` | No | - |
| `properties` | `Properties` | No | - |
| `id` | `string \| number \| undefined` | Yes | - |