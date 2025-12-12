# randomLcg

Returns a linear congruential generator; this function can be called repeatedly to obtain pseudorandom values well-distributed on the interval [0,1) and with a long period (up to 1 billion numbers), similar to Math.random. A seed can be specified as a real number in the interval [0,1) or as any integer. In the latter case, only the lower 32 bits are considered. Two generators instanced with the same seed generate the same sequence, allowing to create reproducible pseudo-random experiments. If the seed is not specified, one is chosen using Math.random.

**Return Type:** `() => number`

## Parameters

| Name   | Type     | Optional | Description                                                               |
| :----- | :------- | :------- | :------------------------------------------------------------------------ |
| `seed` | `number` | Yes      | A seed that is either a real number in the interval [0,1) or any integer. |
