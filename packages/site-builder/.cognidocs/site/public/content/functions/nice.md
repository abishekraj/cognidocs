# nice

Returns a new interval [niceStart, niceStop] covering the given interval [start, stop] and where niceStart and niceStop are guaranteed to align with the corresponding tick step. Like d3.tickIncrement, this requires that start is less than or equal to stop.


**Return Type:** `[number, number]`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `start` | `number` | No | Start value for ticks |
| `stop` | `number` | No | Stop value for ticks |
| `count` | `number` | No | count + 1 is the approximate number of ticks to be returned by d3.ticks. |