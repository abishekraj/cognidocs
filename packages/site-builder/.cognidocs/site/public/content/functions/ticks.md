# ticks

Generate an array of approximately count + 1 uniformly-spaced, nicely-rounded values between start and stop (inclusive). Each value is a power of ten multiplied by 1, 2 or 5. See also d3.tickIncrement, d3.tickStep and linear.ticks. Ticks are inclusive in the sense that they may include the specified start and stop values if (and only if) they are exact, nicely-rounded values consistent with the inferred step. More formally, each returned tick t satisfies start ≤ t and t ≤ stop.


**Return Type:** `number[]`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `start` | `number` | No | Start value for ticks |
| `stop` | `number` | No | Stop value for ticks |
| `count` | `number` | No | count + 1 is the approximate number of ticks to be returned by d3.ticks. |