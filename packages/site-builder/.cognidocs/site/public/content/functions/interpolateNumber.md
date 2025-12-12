# interpolateNumber

Returns an interpolator between the two numbers `a` and `b`. The returned interpolator is equivalent to: `(t) => a * (1 - t) + b * t`.

**Return Type:** `(t: number) => number`

## Parameters

| Name | Type                              | Optional | Description |
| :--- | :-------------------------------- | :------- | :---------- |
| `a`  | `number \| { valueOf(): number }` | No       | -           |
| `b`  | `number \| { valueOf(): number }` | No       | -           |
