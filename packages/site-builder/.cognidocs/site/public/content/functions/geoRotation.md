# geoRotation

Returns a rotation function for the given angles.

**Return Type:** `GeoRotation`

## Parameters

| Name     | Type                                           | Optional | Description                                                                                                                                                                                                                             |
| :------- | :--------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `angles` | `[number, number] \| [number, number, number]` | No       | A two- or three-element array of numbers [lambda, phi, gamma] specifying the rotation angles in degrees about each spherical axis. (These correspond to yaw, pitch and roll.) If the rotation angle gamma is omitted, it defaults to 0. |
