# ExtendedGeometryCollection

A GeoJSON-style GeometryCollection which supports GeoJSON geometry objects and additionally GeoSphere. The generic refers to the type(s) of d3-geo geometry objects contained in the collection.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `type` | `string` | No | - |
| `bbox` | `number[] \| undefined` | Yes | - |
| `crs` | `{
        type: string;
        properties: any;
    } \| undefined` | Yes | - |
| `geometries` | `GeometryType[]` | No | - |