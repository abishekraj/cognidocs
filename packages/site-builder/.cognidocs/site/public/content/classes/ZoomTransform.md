# ZoomTransform

A zoom transform The zoom behavior stores the zoom state on the element to which the zoom behavior was applied, not on the zoom behavior itself. This is because the zoom behavior can be applied to many elements simultaneously, and each element can be zoomed independently. The zoom state can change either on user interaction or programmatically via zoom.transform. To retrieve the zoom state, use event.transform on the current zoom event within a zoom event listener (see zoom.on), or use d3.zoomTransform for a given node. The latter is particularly useful for modifying the zoom state programmatically, say to implement buttons for zooming in and out. For details see {@link https://github.com/d3/d3-zoom#zoom-transforms}

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `x` | `number` | - |
| `y` | `number` | - |
| `k` | `number` | - |

## Methods
### apply

Return the transformation of the specified point which is a two-element array of numbers [x, y]. The returned point is equal to [xk + tx, yk + ty].

**Return:** `[number, number]`

### applyX

Return the transformation of the specified x-coordinate, xk + tx.

**Return:** `number`

### applyY

Return the transformation of the specified y-coordinate, yk + ty.

**Return:** `number`

### invert

Return the inverse transformation of the specified point which is a two-element array of numbers [x, y]. The returned point is equal to [(x - tx) / k, (y - ty) / k].

**Return:** `[number, number]`

### invertX

Return the inverse transformation of the specified x-coordinate, (x - tx) / k.

**Return:** `number`

### invertY

Return the inverse transformation of the specified y-coordinate, (y - ty) / k.

**Return:** `number`

### rescaleX

Returns a copy of the continuous scale x whose domain is transformed. This is implemented by first applying the inverse x-transform on the scale’s range, and then applying the inverse scale to compute the corresponding domain The scale x must use d3.interpolateNumber; do not use continuous.rangeRound as this reduces the accuracy of continuous.invert and can lead to an inaccurate rescaled domain. This method does not modify the input scale x; x thus represents the untransformed scale, while the returned scale represents its transformed view.

**Return:** `S`

### rescaleY

Returns a copy of the continuous scale y whose domain is transformed. This is implemented by first applying the inverse y-transform on the scale’s range, and then applying the inverse scale to compute the corresponding domain The scale y must use d3.interpolateNumber; do not use continuous.rangeRound as this reduces the accuracy of continuous.invert and can lead to an inaccurate rescaled domain. This method does not modify the input scale x; x thus represents the untransformed scale, while the returned scale represents its transformed view.

**Return:** `S`

### scale

Return a transform whose scale k1 is equal to k0 × k, where k0 is this transform’s scale.

**Return:** `ZoomTransform`

### toString

Return a string representing the SVG transform corresponding to this transform.

**Return:** `string`

### translate

Returns a transform whose translation tx1 and ty1 is equal to tx0 + tkx and ty0 + tky, where tx0 and ty0 is this transform’s translation and tk is this transform’s scale.

**Return:** `ZoomTransform`
