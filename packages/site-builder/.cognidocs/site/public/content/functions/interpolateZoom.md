# interpolateZoom

Returns an interpolator between the two views `a` and `b` of a two-dimensional plane, based on [“Smooth and efficient zooming and panning”](http://www.win.tue.nl/~vanwijk/zoompan.pdf). Each view is defined as an array of three numbers: *cx*, *cy* and *width*. The first two coordinates *cx*, *cy* represent the center of the viewport; the last coordinate *width* represents the size of the viewport. The returned interpolator exposes a *duration* property which encodes the recommended transition duration in milliseconds. This duration is based on the path length of the curved trajectory through *x,y* space. If you want to a slower or faster transition, multiply this by an arbitrary scale factor (*V* as described in the original paper).


**Return Type:** `ZoomInterpolator`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `a` | `ZoomView` | No | - |
| `b` | `ZoomView` | No | - |