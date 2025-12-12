# polygonHull

Returns the convex hull of the specified points using Andrew’s monotone chain algorithm. The returned hull is represented as an array containing a subset of the input points arranged in counterclockwise order. Returns null if points has fewer than three elements.

**Return Type:** `Array<[number, number]> | null`

## Parameters

| Name     | Type                      | Optional | Description                                        |
| :------- | :------------------------ | :------- | :------------------------------------------------- |
| `points` | `Array<[number, number]>` | No       | Array of coordinates <x0, y0>, <x1, y1> and so on. |
