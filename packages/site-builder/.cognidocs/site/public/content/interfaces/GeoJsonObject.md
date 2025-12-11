# GeoJsonObject

The base GeoJSON object. https://tools.ietf.org/html/rfc7946#section-3 The GeoJSON specification also allows foreign members (https://tools.ietf.org/html/rfc7946#section-6.1) Developers should use "&" type in TypeScript or extend the interface to add these foreign members.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `type` | `GeoJsonTypes` | No | - |
| `bbox` | `BBox \| undefined` | Yes | - |