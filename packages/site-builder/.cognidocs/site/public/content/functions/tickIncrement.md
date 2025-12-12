# tickIncrement

Returns the difference between adjacent tick values if the same arguments were passed to d3.ticks: a nicely-rounded value that is a power of ten multiplied by 1, 2 or 5. Like d3.tickStep, except requires that start is always less than or equal to stop, and if the tick step for the given start, stop and count would be less than one, returns the negative inverse tick step instead. This method is always guaranteed to return an integer, and is used by d3.ticks to avoid guarantee that the returned tick values are represented as precisely as possible in IEEE 754 floating point.

**Return Type:** `number`

## Parameters

| Name    | Type     | Optional | Description                                                              |
| :------ | :------- | :------- | :----------------------------------------------------------------------- |
| `start` | `number` | No       | Start value for ticks                                                    |
| `stop`  | `number` | No       | Stop value for ticks                                                     |
| `count` | `number` | No       | count + 1 is the approximate number of ticks to be returned by d3.ticks. |
