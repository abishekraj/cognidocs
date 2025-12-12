# tickStep

Returns the difference between adjacent tick values if the same arguments were passed to d3.ticks: a nicely-rounded value that is a power of ten multiplied by 1, 2 or 5. Note that due to the limited precision of IEEE 754 floating point, the returned value may not be exact decimals; use d3-format to format numbers for human consumption.

**Return Type:** `number`

## Parameters

| Name    | Type     | Optional | Description                                                              |
| :------ | :------- | :------- | :----------------------------------------------------------------------- |
| `start` | `number` | No       | Start value for ticks                                                    |
| `stop`  | `number` | No       | Stop value for ticks                                                     |
| `count` | `number` | No       | count + 1 is the approximate number of ticks to be returned by d3.ticks. |
