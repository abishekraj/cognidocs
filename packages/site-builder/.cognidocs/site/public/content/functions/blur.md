# blur

Blurs an array of data in-place by applying three iterations of a moving average transform (box filter) for a fast approximation of a Gaussian kernel of the given radius, a non-negative number. Returns the given data.

**Return Type:** `ArrayLike<number>`

## Parameters

| Name     | Type                | Optional | Description |
| :------- | :------------------ | :------- | :---------- |
| `data`   | `ArrayLike<number>` | No       | -           |
| `radius` | `number`            | No       | -           |
