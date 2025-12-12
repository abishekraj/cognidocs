# geoTransform

Defines an arbitrary transform using the methods defined on the specified methods object. Any undefined methods will use pass-through methods that propagate inputs to the output stream.

**Return Type:** `{ stream(s: GeoStream): T & GeoStream }`

## Parameters

| Name      | Type | Optional | Description                                                                                    |
| :-------- | :--- | :------- | :--------------------------------------------------------------------------------------------- |
| `methods` | `T`  | No       | An object with custom method implementations, which are used to create a transform projection. |
