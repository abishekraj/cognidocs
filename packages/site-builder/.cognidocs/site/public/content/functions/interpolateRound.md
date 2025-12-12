# interpolateRound

Returns an interpolator between the two numbers `a` and `b`; the interpolator is similar to `interpolateNumber`, except it will round the resulting value to the nearest integer.

**Return Type:** `(t: number) => number`

## Parameters

| Name | Type                              | Optional | Description |
| :--- | :-------------------------------- | :------- | :---------- |
| `a`  | `number \| { valueOf(): number }` | No       | -           |
| `b`  | `number \| { valueOf(): number }` | No       | -           |
