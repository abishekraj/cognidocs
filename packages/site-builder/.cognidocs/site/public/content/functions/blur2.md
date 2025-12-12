# blur2

Blurs a matrix of the given width and height in-place by applying a horizontal blur of radius rx and a vertical blur of radius ry (which defaults to rx). The matrix values data are stored in a flat (one-dimensional) array. If height is not specified, it is inferred from the given width and data.length. Returns the blurred matrix {data, width, height}.

**Return Type:** `Matrix`

## Parameters

| Name   | Type     | Optional | Description |
| :----- | :------- | :------- | :---------- |
| `data` | `Matrix` | No       | -           |
| `rx`   | `number` | No       | -           |
| `ry`   | `number` | Yes      | -           |
